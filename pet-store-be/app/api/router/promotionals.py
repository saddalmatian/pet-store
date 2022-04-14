from fastapi import APIRouter, Header
from app.api.models.schemas import \
    promotionals as _schemas_promotional
from app.api.services import promotionals \
    as _service_promotionals
from app.utils.security import get_username_from_token
router = APIRouter(
    prefix="/promotionals",
    tags=["Promotional"]
)


@router.post(
    "/create-promotional"
)
async def create_promotional(
    promotional_in: _schemas_promotional.PromotionalIn,
    authorization_token: str = Header(None)
):
    username = get_username_from_token(authorization_token)
    response = _service_promotionals.create_promotional(
        username, promotional_in
    )
    return response


@router.get(
    "/get-promotional"
)
async def get_promotional(
    promotional_id: str,
    authorization_token: str = Header(None)
):
    _ = get_username_from_token(authorization_token)
    response = _service_promotionals.get_promotional(
        promotional_id
    )
    return response


@router.get(
    "/get-all-promotional"
)
async def get_all_promotional(
    authorization_token: str = Header(None)
):
    _ = get_username_from_token(authorization_token)
    response = _service_promotionals.get_all_promotional()
    return response


@router.put(
    "/update-promotional"
)
async def update_promo(
    promotional_in: _schemas_promotional.PromotionalInUp,
    authorization_token: str = Header(None)
):
    username = get_username_from_token(authorization_token)
    response = _service_promotionals.update_promo(
        username, promotional_in
    )
    return response


@router.delete(
    "/delete-promotional"
)
async def delete_promo(
    promotional_id: str,
    authorization_token: str = Header(None)
):
    username = get_username_from_token(authorization_token)
    response = _service_promotionals.delete_promo(
        username, promotional_id
    )
    return response
