from fastapi import APIRouter, Header
from app.api.services import dashboards \
    as _service_dashboard
from app.utils.security import get_username_from_token

router = APIRouter(
    prefix="/dashboards",
    tags=["Dashboard"]
)


@router.get("/get-most-sold")
async def get_product_sold(
    product_type_id: str = '', order_by: str = 'desc',
    authorization_token: str = Header(None),
) -> dict:
    username = get_username_from_token(authorization_token)
    response = _service_dashboard.get_product_sold(
        username, order_by,
        product_type_id
    )
    return response


@router.get("/get-most-profit")
async def get_product_profit(
    product_type: str, order_by: str = 'desc',
    authorization_token: str = Header(None),
) -> dict:
    username = get_username_from_token(authorization_token)
    response = _service_dashboard.get_product_profit(username, order_by)
    return response


@router.get("/get-profit-service")
async def get_service_profit(
    authorization_token: str = Header(None),
) -> dict:
    username = get_username_from_token(authorization_token)
    response = _service_dashboard.get_profit_service(username)
    return response
