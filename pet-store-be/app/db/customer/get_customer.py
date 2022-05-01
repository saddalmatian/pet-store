from fastapi import HTTPException
from app.api.models.domains import\
    (
        customers as _domain_customers,
    )
from app.utils.db_helper import engine
from sqlmodel import Session, select


def get_customer(username: str) -> dict:
    customer = _domain_customers.CustomerSQL
    with Session(engine) as session:
        statement = select(customer).where(
            customer.customer_username == username
        )
        results = session.exec(statement)
        try:
            customer = results.one()
        except Exception:
            raise HTTPException(status_code=400, detail='Customer not found')
        item_dict = {
            "Username": customer.customer_username,
            "FullName": customer.customer_name,
            "Email": customer.customer_mail,
            "Phone": customer.customer_phone,
            "Password": customer.customer_pwd,
            "Address": customer.address_detail
        }
        return item_dict
