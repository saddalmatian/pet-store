import hashlib
import hmac
from fastapi import HTTPException
from fastapi.responses import RedirectResponse
from sqlmodel import Session, select
from app.api.models.domains.employees import EmployeeSQL
from app.utils.db_helper import generate_ksuid, get_userid_from_username
from datetime import datetime
from app.api.services.vnpay import vnpay
# from app.db.bill.add_to_cart import add_to_cart
from app.db.bill.create_cart import create_a_cart
from app.db.bill.add_item_to_cart import add_item_to_cart
from app.db.bill.get_the_cart import get_the_cart
from app.db.bill.update_cart_product_detail import update_cart_product_detail
from app.db.bill.remove_product_cart import remove_product_cart
from app.db.bill.update_status import update_bill_status
from app.db.bill.get_all_cart import get_all_cart_admin
from app.db.product.update_product_quantity_in_bill import\
    update_product_quantity_in_bill, raise_sold
from app.utils.db_helper import engine
VNPAY_RETURN_URL = 'http://localhost:8000/bills/payment_return'
# get from config
VNPAY_PAYMENT_URL = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html'
# get from config
VNPAY_API_URL = 'https://sandbox.vnpayment.vn/merchant_webapi/merchant.html'
VNPAY_TMN_CODE = '14H33NEJ'  # Website ID in VNPAY System, get from config
# Secret key for create checksum,get from config
VNPAY_HASH_SECRET_KEY = 'NVTDUKXFKKOPKEEQJDUZMTPIXEZZALKS'


def get_all_cart(username: str):
    if username != 'admin':
        user_id = get_userid_from_username(username, is_customer=True)
    else:
        user_id = get_userid_from_username(username)
    response = get_all_cart_admin(user_id)
    return response


def set_complete(
    username, bill_id
):
    employee = EmployeeSQL
    with Session(engine) as session:
        statement = select(employee).where(
            employee.employee_username == username)
        try:
            result = session.exec(statement).first()
            employee_id = result.employee_id
        except Exception:
            raise HTTPException(status_code=404, detail="Employee not found")
    raise_sold(bill_id)
    response = update_bill_status(
        bill_id, employee_id,
        'Đã giao',
    )
    return response


def pay_cash(
    bill_id, amount,
    user_address
):
    _ = update_product_quantity_in_bill(bill_id)
    response = update_bill_status(
        bill_id, 'admin_id',
        'Đang giao', 'Tiền mặt',
        amount, user_address
    )
    return response


def remove_product_from_cart(
    bill_id: str, product_id: str
):
    response = remove_product_cart(bill_id, product_id)
    return response


def update_cart_product(
    username, list_product,
    bill_id
):
    response = update_cart_product_detail(
        username, list_product,
        bill_id
    )
    return response


def get_cart(username: str):
    response = get_the_cart(username)
    return response


def create_cart(username: str):
    response = create_a_cart(username)
    return response


def add_to_cart(
    product_quantity,
    product_cost, bill_id,
    promotional_id, service_id,
    product_id
):
    response = add_item_to_cart(
        product_quantity,
        product_cost, bill_id,
        promotional_id, service_id,
        product_id
    )
    return response


def hmacsha512(key, data):
    byteKey = key.encode('utf-8')
    byteData = data.encode('utf-8')
    return hmac.new(byteKey, byteData, hashlib.sha512).hexdigest()


def payment(
    vn_amount, vn_detail,
    bill_id, user_address
):
    # Process input data and build url payment
    order_type = 'other'
    order_id = generate_ksuid()
    amount = vn_amount
    order_desc = vn_detail
    bank_code = 'NCB'
    language = 'vn'
    # Build URL Payment
    vnp = vnpay()
    vnp.requestData['vnp_Version'] = '2.1.0'
    vnp.requestData['vnp_Command'] = 'pay'
    vnp.requestData['vnp_TmnCode'] = VNPAY_TMN_CODE
    vnp.requestData['vnp_Amount'] = amount * 100
    vnp.requestData['vnp_CurrCode'] = 'VND'
    vnp.requestData['vnp_TxnRef'] = order_id
    vnp.requestData['vnp_OrderInfo'] = order_desc
    vnp.requestData['vnp_OrderType'] = order_type
    # Check language, default: vn
    if language and language != '':
        vnp.requestData['vnp_Locale'] = language
    else:
        vnp.requestData['vnp_Locale'] = 'vn'
        # Check bank_code, if bank_code is empty,
        # customer will be selected bank on VNPAY
    if bank_code and bank_code != "":
        vnp.requestData['vnp_BankCode'] = bank_code

    vnp.requestData['vnp_CreateDate'] = datetime.now().strftime(
        '%Y%m%d%H%M%S')  # 20150410063022
    vnp.requestData['vnp_IpAddr'] = '127.0.0.1'
    vnp.requestData['vnp_ReturnUrl'] = VNPAY_RETURN_URL + \
        f'?bill_id={bill_id}&user_address={user_address}'
    vnpay_payment_url = vnp.get_payment_url(
        VNPAY_PAYMENT_URL, VNPAY_HASH_SECRET_KEY
    )
    return {
        "PaymentURL": vnpay_payment_url,
        "ReturnURL": vnp.requestData['vnp_ReturnUrl']
    }


def payment_return(
        vnp_Amount, vnp_BankCode,
        vnp_BankTranNo, vnp_CardType,
        vnp_OrderInfo, vnp_PayDate,
        vnp_ResponseCode, vnp_TmnCode,
        vnp_TransactionNo, vnp_TransactionStatus,
        vnp_TxnRef, vnp_SecureHash,
        bill_id, user_address
):
    inputData = {
        "vnp_TxnRef": vnp_TxnRef,
        "vnp_Amount": vnp_Amount,
        "vnp_BankCode": vnp_BankCode,
        "vnp_BankTranNo": vnp_BankTranNo,
        "vnp_CardType": vnp_CardType,
        "vnp_OrderInfo": vnp_OrderInfo,
        "vnp_PayDate": vnp_PayDate,
        "vnp_ResponseCode": vnp_ResponseCode,
        "vnp_TmnCode": vnp_TmnCode,
        "vnp_TransactionNo": vnp_TransactionNo,
        "vnp_TransactionStatus": vnp_TransactionStatus,
        "vnp_TxnRef": vnp_TxnRef,
        "vnp_SecureHash": vnp_SecureHash
    }
    if inputData:
        vnp = vnpay()
        vnp.responseData = inputData
        order_id = inputData['vnp_TxnRef']
        amount = int(inputData['vnp_Amount']) / 100
        order_desc = inputData['vnp_OrderInfo']
        vnp_TransactionNo = inputData['vnp_TransactionNo']
        vnp_ResponseCode = inputData['vnp_ResponseCode']
        vnp_TmnCode = inputData['vnp_TmnCode']
        vnp_PayDate = inputData['vnp_PayDate']
        vnp_BankCode = inputData['vnp_BankCode']
        vnp_CardType = inputData['vnp_CardType']
        if vnp.validate_response(VNPAY_HASH_SECRET_KEY):
            if vnp_ResponseCode == "00":
                _ = update_product_quantity_in_bill(bill_id)
                _ = update_bill_status(
                    bill_id, 'admin_id',
                    'Đang giao', 'VNPay',
                    amount, user_address
                )
                return RedirectResponse("http://localhost:3000/info")
            else:
                return RedirectResponse("http://localhost:3000/error")
        else:
            return ("payment_return.html",
                    {
                        "title": "Kết quả thanh toán",
                        "result": "Lỗi",
                        "order_id": order_id,
                        "amount": amount,
                        "order_desc": order_desc,
                        "vnp_TransactionNo": vnp_TransactionNo,
                        "vnp_ResponseCode": vnp_ResponseCode,
                        "msg": "Sai checksum"}
                    )
    else:
        return (
            "payment_return.html",
            {"title": "Kết quả thanh toán", "result": ""}
        )
