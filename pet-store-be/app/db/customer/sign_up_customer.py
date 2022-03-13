from fastapi import HTTPException
from app.api.models.domains import customers\
    as _domain_customer
from app.utils.db_helper import engine, generate_ksuid
from sqlmodel import Session


def sign_up_customer(
    full_name: str, email: str,
    phone: str, address: str,
    username: str, password: str
):
    customer_id = generate_ksuid()
    customer = _domain_customer.CustomerSQL(
        customer_name=full_name,
        customer_mail=email,
        customer_pwd=password,
        customer_phone=phone,
        customer_username=username,
        address_detail=address,
        customer_id=customer_id
    )
    try:
        with Session(engine) as session:
            session.add(customer)
            session.commit()
    except Exception:
        raise HTTPException(400, detail="Invalid data input")
