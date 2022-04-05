from fastapi import HTTPException
from app.api.models.domains import bills as _domain_bills
from app.utils.db_helper import engine, get_userid_from_username
from sqlmodel import Session, select
from operator import and_


def get_the_cart(username):
    cart = _domain_bills.BillSQL
    cart_detail = _domain_bills.BillDetailSQL
    user_id = get_userid_from_username(username, is_customer=True)
    response = {}
    with Session(engine) as session:
        statement = select(cart).where(
            and_(
                cart.customer_id == user_id,
                cart.bill_status == 'New'
            )
        )
        try:
            result = session.exec(statement).one()
            bill_id = result.bill_id
            response.update(
                {
                    "Bill": {**result.dict()}
                }
            )
            statement = select(cart_detail).where(
                cart_detail.bill_id == bill_id
            )
            detail_result = session.exec(statement)
            bill_detail_result = []
            for bill_detail in detail_result:
                temp_response = {
                    "ProductCost": bill_detail.cost,
                    "PromotionalID": bill_detail.promotional_id,
                    "ServiceID": bill_detail.service_id,
                    "ProductQuantity": bill_detail.product_quantity,
                    "ProductID": bill_detail.product_id,
                    "BillID": bill_detail.bill_id
                }
                bill_detail_result.append(temp_response)
            response.update(
                {
                    "BillDetails": bill_detail_result
                }
            )
        except Exception:
            raise HTTPException(
                status_code=404, detail="There is no cart created yet !"
            )
        return response
