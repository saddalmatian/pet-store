from app.api.models.domains import \
    (
        customers as _domain_customers,
    )
from app.utils.db_helper import engine
from sqlmodel import Session, select
from fastapi import HTTPException
from app.api.models.schemas import customers as _schemas_customer


def update_customer_detail(
    customer_in: _schemas_customer.CustomerSignUpIn,
    username: str
) -> dict:
    customer = _domain_customers.CustomerSQL
    customer_fullname = customer_in.full_name
    customer_password = customer_in.password
    customer_phone = customer_in.phone
    customer_address = customer_in.address

    with Session(engine) as session:
        statement = select(customer).where(
            customer.customer_username == username
        )
        # Update customer sql
        results = session.exec(statement)
        try:
            customer_result = results.one()
        except Exception:
            raise HTTPException(
                400, 'customer not found'
            )
        customer_result.customer_name = customer_fullname
        customer_result.customer_pwd = customer_password
        customer_result.customer_phone = customer_phone
        customer_result.address_detail = customer_address
        session.add(customer_result)
        session.commit()
        session.refresh(customer_result)
        customer_response = customer_result.dict()
        response = {
            "FullName": customer_response.get('customer_name'),
            "Password": customer_response.get('customer_pwd'),
            "Phone": customer_response.get('customer_phone'),
            "Adress": customer_response.get('address_detail'),
            "CustomerId": customer_response.get('customer_id'),
            "Email": customer_response.get('customer_email'),
            "Username": customer_response.get('customer_username')
        }
    return response
