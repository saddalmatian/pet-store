from fastapi import HTTPException
from app.api.models.domains import bills as _domain_bills
from app.utils.db_helper import engine, get_userid_from_username
from sqlmodel import Session, select
from operator import and_


def get_all_cart_admin():
    cart = _domain_bills.BillSQL
    response = []
    with Session(engine) as session:
        statement = select(cart)
        try:
            result = session.exec(statement)
            for cart in result:
                response_result = {**cart.dict()}
                response.append(response_result)
            return response
        except Exception:
            raise HTTPException(
                status_code=404, detail="There is no cart created yet !"
            )
        return response
