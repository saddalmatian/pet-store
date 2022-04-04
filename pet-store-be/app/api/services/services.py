from app.api.models.schemas import services as _schemas_service
from app.utils.security import is_admin, is_employee_or_customer
from fastapi import HTTPException
from app.db.service.create_new_service import \
    create_new_service, create_new_service_type


def create_service_type(
    service_type_name: str, username: str
):
    _ = is_admin(username)
    response = create_new_service_type(
        service_type_name
    )
    return response


def create_service(
    username: str, service_in: _schemas_service.ServiceCreIn
):
    # ) -> _schemas_service.ServiceCreResp:
    _ = is_admin(username)
    response = create_new_service(
        **service_in.dict()
    )
    return response
