from fastapi import APIRouter, Header
from app.api.services import customers \
    as _service_customer
from app.api.models.schemas import customers\
    as _schemas_customer
from app.utils.security import get_username_from_token

router = APIRouter(
    prefix="/customers",
    tags=["Customer"]
)


@router.post("/sign-up")
async def customer_sign_up(
    customer_info_in: _schemas_customer.CustomerSignUpIn
) -> dict:
    response = _service_customer.customer_sign_up(customer_info_in)
    return response


@router.post("/sign-in")
async def customer_sign_in(
    username: str,
    password: str
) -> dict:
    response = _service_customer.customer_sign_in(username, password)
    return response


@router.get(
    "/get-customer-detail",
    response_model=_schemas_customer.CustomerSignUpIn
)
async def get_customer(
    authorization_token: str = Header(None)
) -> dict:
    username = get_username_from_token(authorization_token)
    response = _service_customer.get_customer_detail(username)
    return response


@router.put(
    "/update-customer",
    response_model=_schemas_customer.CustomerSignUpIn
)
async def update_customer(
    customer_in: _schemas_customer.CustomerSignUpIn,
    authorization_token: str = Header(None),
) -> dict:
    username = get_username_from_token(authorization_token)
    response = _service_customer.update_customer(customer_in, username)
    return response
