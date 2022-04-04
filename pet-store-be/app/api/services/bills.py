import hashlib
import hmac
from app.utils.db_helper import generate_ksuid
from datetime import datetime
from app.api.services.vnpay import vnpay
VNPAY_RETURN_URL = 'http://localhost:8000/bill/payment_return'
# get from config
VNPAY_PAYMENT_URL = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html'
# get from config
VNPAY_API_URL = 'https://sandbox.vnpayment.vn/merchant_webapi/merchant.html'
VNPAY_TMN_CODE = '14H33NEJ'  # Website ID in VNPAY System, get from config
# Secret key for create checksum,get from config
VNPAY_HASH_SECRET_KEY = 'NVTDUKXFKKOPKEEQJDUZMTPIXEZZALKS'


def hmacsha512(key, data):
    byteKey = key.encode('utf-8')
    byteData = data.encode('utf-8')
    return hmac.new(byteKey, byteData, hashlib.sha512).hexdigest()


def payment(vn_amount, vn_detail):
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
    vnp.requestData['vnp_ReturnUrl'] = VNPAY_RETURN_URL
    vnpay_payment_url = vnp.get_payment_url(
        VNPAY_PAYMENT_URL, VNPAY_HASH_SECRET_KEY)
    return vnpay_payment_url


def payment_return(
        vnp_Amount, vnp_BankCode,
        vnp_BankTranNo, vnp_CardType,
        vnp_OrderInfo, vnp_PayDate,
        vnp_ResponseCode, vnp_TmnCode,
        vnp_TransactionNo, vnp_TransactionStatus,
        vnp_TxnRef, vnp_SecureHash):
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
                return ("payment_return.html",
                        {
                            "title": "Kết quả thanh toán",
                            "result": "Thành công",
                            "order_id": order_id,
                            "amount": amount,
                            "order_desc": order_desc,
                            "vnp_TransactionNo": vnp_TransactionNo,
                            "vnp_ResponseCode": vnp_ResponseCode
                        })
            else:
                return ("payment_return.html",
                        {
                            "title": "Kết quả thanh toán",
                            "result": "Lỗi",
                            "order_id": order_id,
                            "amount": amount,
                            "order_desc": order_desc,
                            "vnp_TransactionNo": vnp_TransactionNo,
                            "vnp_ResponseCode": vnp_ResponseCode
                        })
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
