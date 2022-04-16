from fastapi import APIRouter, Header
from app.api.models.schemas import \
    rates as _schemas_rate
from app.api.services import rates \
    as _service_rates
from app.utils.security import get_username_from_token
router = APIRouter(
    prefix="/rates",
    tags=["Rate"]
)


@router.post(
    "/rate-a-product"
)
async def rate_product(
    rate_in: _schemas_rate.RateIn,
    authorization_token: str = Header(None)
):
    username = get_username_from_token(authorization_token)
    response = _service_rates.rate_a_product(
        username, **rate_in.dict()
    )
    return response
