
import datetime
from fastapi import APIRouter, Form, UploadFile, File, Header
from typing import List, Optional
from app.api.models.schemas import \
    bills as _schemas_bill
from app.api.services import bills \
    as _service_bills
from app.utils.security import get_username_from_token
router = APIRouter(
    prefix="/bills",
    tags=["Bill"]
)


@router.get(
    "/vn-pay"
)
async def payment(
    vn_amount: int,
    vn_detail: str,
    authorization_token: str = Header(None),
):
    username = get_username_from_token(authorization_token)
    response = _service_bills.payment(vn_amount, vn_detail)
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
    authorization_token: str = Header(None),
):
    username = get_username_from_token(authorization_token)
    response = _service_bills.payment_return(
        vnp_Amount, vnp_BankCode,
        vnp_BankTranNo, vnp_CardType,
        vnp_OrderInfo, vnp_PayDate,
        vnp_ResponseCode, vnp_TmnCode,
        vnp_TransactionNo, vnp_TransactionStatus,
        vnp_TxnRef, vnp_SecureHash
    )
    return response
