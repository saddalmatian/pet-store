from fastapi import APIRouter, Form, UploadFile, File, Header
from typing import List, Optional
from app.api.models.schemas import \
    services as _schemas_service
from app.api.services import services \
    as _service_service
from app.utils.security import get_username_from_token
router = APIRouter(
    prefix="/service",
    tags=["Service"]
)


@router.post(
    "/create-service-type"
)
async def create_service_type(
    service_type_name: str,
    authorization_token: str = Header(None),
):
    username = get_username_from_token(authorization_token)
    response = _service_service.create_service_type(
        service_type_name, username
    )
    return response


@router.post(
    "/create-service",
    # response_model=_schemas_service.ServiceCreResp
)
async def create_service(
    service_in: _schemas_service.ServiceCreIn,
    authorization_token: str = Header(None),
):
    username = get_username_from_token(authorization_token)
    response = _service_service.create_service(
        username, service_in
    )
    return response
