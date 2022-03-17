from fastapi import HTTPException
from app.api.models.domains import customers\
    as _domain_customer
from app.utils.db_helper import engine
from sqlmodel import Session, select
from app.utils.security import create_access_token


def sign_in_customer(
    username: str, password: str
):
    customer = _domain_customer.CustomerSQL
    # try:
    with Session(engine) as session:
        statement = select(customer).where(
            customer.customer_username == username
        )
        results = session.exec(statement)
        try:
            customer_result = results.one()
        except Exception:
            raise HTTPException(400, detail="Username not found")
        cus_password = customer_result.customer_pwd
        if cus_password == password:
            payload = {
                "Username": username
            }
            token = create_access_token(payload)
            response = {
                "Username": username,
                "Token": token
            }
            return response
        raise HTTPException(400, detail="Password is not correct")
