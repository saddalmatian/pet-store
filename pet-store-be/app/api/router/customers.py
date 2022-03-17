from fastapi import APIRouter
from app.api.services import customers \
    as _service_customer
from app.api.models.schemas import customers\
    as _schemas_customer

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
