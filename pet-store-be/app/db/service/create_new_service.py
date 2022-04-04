
from app.api.models.domains import (
    services as _domain_service
)
from app.utils.db_helper import engine, generate_ksuid
from sqlmodel import Session, select
from fastapi import HTTPException


def create_new_service_type(
    service_type_name: str
):
    service_type_id = generate_ksuid()
    service_type = _domain_service.ServiceTypeSQL(
        service_type_id=service_type_id,
        service_type_name=service_type_name
    )
    with Session(engine) as session:
        try:
            session.add(service_type)
            session.commit()
        except Exception:
            raise HTTPException(
                status_code=400,
                detail='This service type is already existed in database'
            )
    return {"Message": "Created new service type successfully"}


def create_new_service(
    service_name: str, service_detail: str,
    service_cost: str, service_type_name: str
):
    service_id = generate_ksuid()
    service_type = _domain_service.ServiceTypeSQL

    with Session(engine) as session:
        statement = select(service_type).where(
            service_type.service_type_name == service_type_name
        )
        result = session.exec(statement)
        try:
            service_type_result = result.one()
            service_type_id = service_type_result.service_type_id
        except Exception:
            raise HTTPException(
                status_code=400, detail="There is no service type like that !"
            )
        service = _domain_service.ServiceSQL(
            service_id=service_id,
            service_type_id=service_type_id,
            service_name=service_name,
            service_cost=service_cost,
            service_detail=service_detail
        )
        try:
            session.add(service)
            session.commit()
        except Exception:
            raise HTTPException(
                status_code=400, detail="Service exists"
            )
    return {"Message": "Created new service successfully"}
