
from fastapi import APIRouter, Body, Header
from typing import List
from app.api.models.schemas import \
    bills as _schemas_bill
from app.api.services import bills \
    as _service_bills
from app.utils.security import get_username_from_token
router = APIRouter(
    prefix="/bills",
    tags=["Bill"]
)


@router.put(
    "/set-complete"
)
async def set_complete(
    bill_id: str, employee_id: str,
    payment_method: str, amount: int,
    authorization_token: str = Header(None)
):
    _ = get_username_from_token(authorization_token)
    response = _service_bills.set_complete(
        bill_id, employee_id,
        payment_method, amount
    )
    return response


@router.put(
    "/pay-by-cash"
)
async def pay_cash(
    bill_id: str, amount: int,
    authorization_token: str = Header(None)
):
    _ = get_username_from_token(authorization_token)
    response = _service_bills.pay_cash(bill_id, amount)
    return response


@router.delete(
    "/remove-product-from-cart"
)
async def remove_product_from_cart(
    bill_id: str, product_id: str,
    authorization_token: str = Header(None)
):
    _ = get_username_from_token(authorization_token)
    response = _service_bills.remove_product_from_cart(bill_id, product_id)
    return response


@router.put(
    "/update-cart"
)
async def update_cart_product(
    list_product: List[_schemas_bill.BillDetailIn],
    bill_id: str = Body(default=''),
    authorization_token: str = Header(None)
):
    username = get_username_from_token(authorization_token)
    response = _service_bills.update_cart_product(
        username, list_product,
        bill_id
    )
    return response


@router.get(
    "/get-cart"
)
async def get_cart(
    authorization_token: str = Header(None)
):
    username = get_username_from_token(authorization_token)
    response = _service_bills.get_cart(username)
    return response


@router.get(
    "/get-all-cart"
)
async def get_all_cart(
    authorization_token: str = Header(None)
):
    _ = get_username_from_token(authorization_token)
    response = _service_bills.get_all_cart()
    return response


@router.post(
    "/create-cart"
)
async def create_cart(
    authorization_token: str = Header(None)
):
    username = get_username_from_token(authorization_token)
    response = _service_bills.create_cart(username)
    return response


@router.post(
    "/add-product-to-cart"
)
async def add_to_cart(
    product_quantity: int, product_cost: int,
    bill_id: str, promotional_id: str = '',
    service_id: str = '', product_id: str = '',
    authorization_token: str = Header(None)
):
    _ = get_username_from_token(authorization_token)
    response = _service_bills.add_to_cart(
        product_quantity, product_cost,
        bill_id, promotional_id,
        service_id, product_id
    )
    return response


@router.get(
    "/vn-pay"
)
async def payment(
    vn_amount: int, vn_detail: str,
    bill_id: str,
    authorization_token: str = Header(None),
):
    # username = get_username_from_token(authorization_token)
    response = _service_bills.payment(
        vn_amount, vn_detail,
        bill_id
    )
    return response


@router.get(
    "/payment_return"
)
async def payment_return(
    vnp_Amount: int, vnp_BankCode: str,
    vnp_BankTranNo: int, vnp_CardType: str,
    vnp_OrderInfo: str, vnp_PayDate: str,
    vnp_ResponseCode: str, vnp_TmnCode: str,
    vnp_TransactionNo: str, vnp_TransactionStatus: str,
    vnp_TxnRef: str, vnp_SecureHash: str,
    bill_id: str,
):
    response = _service_bills.payment_return(
        vnp_Amount, vnp_BankCode,
        vnp_BankTranNo, vnp_CardType,
        vnp_OrderInfo, vnp_PayDate,
        vnp_ResponseCode, vnp_TmnCode,
        vnp_TransactionNo, vnp_TransactionStatus,
        vnp_TxnRef, vnp_SecureHash,
        bill_id
    )
    return response
