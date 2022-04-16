from operator import and_
from app.api.models.domains import rates as _rates_domain
from app.utils.db_helper import generate_ksuid
from app.utils.db_helper import engine
from sqlmodel import Session, select
from fastapi import HTTPException


def rate_product(
    user_id: str, product_id: str,
    rate_star_number: str
):
    rate_id = generate_ksuid()
    input = {
        "rate_id": rate_id,
        "product_id": product_id,
        "customer_id": user_id,
        "rate_star_number": rate_star_number
    }
    rate = _rates_domain.RateSQL
    with Session(engine) as session:
        statement = select(rate).where(
            and_(
                rate.product_id == product_id,
                rate.customer_id == user_id
            )
        )
        result = session.exec(statement).first()
        if result:
            raise HTTPException(
                status_code=400, detail='You have rated this product'
            )
        rate = _rates_domain.RateSQL(
            **input
        )
        _ = session.add(rate)
        _ = session.commit()
    response = {
        "Message": "Rate a product successfully"
    }
    return response
