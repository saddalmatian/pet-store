from fastapi import HTTPException
from app.api.models.domains import bills as _domain_bills
from app.utils.db_helper import engine
from sqlmodel import Session, select
from operator import and_


def remove_product_cart(bill_id: str, product_id: str):
    cart_detail = _domain_bills.BillDetailSQL
    with Session(engine) as session:
        statement = select(cart_detail).where(
            and_(
                cart_detail.bill_id == bill_id,
                cart_detail.product_id == product_id
            )
        )
        try:
            result = session.exec(statement).one()
            session.delete(result)
            session.commit()
        except Exception:
            raise HTTPException(
                status_code=400,
                detail="There is no product like that in the cart"
            )
    return {"Message": "Removed an item"}
