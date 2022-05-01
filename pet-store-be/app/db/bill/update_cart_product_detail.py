from app.api.models.domains import bills as _domain_bills
from app.utils.db_helper import engine
from sqlmodel import Session, select
from operator import and_


def update_cart_product_detail(
    username, list_product,
    bill_id, user_address
):
    cart = _domain_bills.BillSQL
    cart_detail = _domain_bills.BillDetailSQL
    with Session(engine) as session:
        response = {}
        list_detail = []
        statement = select(cart).where(cart.bill_id == bill_id)
        result_cart = session.exec(statement).one()
        result_cart.user_address = user_address
        session.add(result_cart)
        session.commit()
        response.update({
            "Bill": {**result_cart.dict()}
        })
        for product in list_product:
            cart_detail = _domain_bills.BillDetailSQL
            statement = select(cart_detail).where(
                and_(
                    cart_detail.bill_id == bill_id,
                    cart_detail.product_id == product.product_id
                )
            )
            result = session.exec(statement)
            bill_detail = result.one()
            bill_detail.cost = product.product_cost
            bill_detail.product_quantity = product.product_quantity
            session.add(bill_detail)  #
            session.commit()  #
            session.refresh(bill_detail)
            list_detail.append({**bill_detail.dict()})
        response.update({
            "BillDetails": list_detail
        })
        return response
