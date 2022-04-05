from fastapi import HTTPException
from app.api.models.domains import bills as _domain_bills
from app.utils.db_helper import engine, generate_ksuid
from sqlmodel import Session, select
from operator import and_


def add_item_to_cart(
    product_quantity,
    product_cost, bill_id,
    promotional_id: str = '', service_id: str = '',
    product_id: str = ''
):
    bill_detail_id = generate_ksuid()
    with Session(engine) as session:
        bill_check = _domain_bills.BillDetailSQL
        statement = select(bill_check).where(
            and_(
                bill_check.bill_id == bill_id,
                bill_check.product_id == product_id
            )
        )
        check_result = session.exec(statement)
        if check_result.first():
            raise HTTPException(
                status_code=400, detail="The cart already have this product")
        bill_detail = _domain_bills.BillDetailSQL(
            bill_detail_id=bill_detail_id,
            bill_id=bill_id,
            product_id=product_id,
            service_id=service_id,
            promotional_id=promotional_id,
            cost=product_cost,
            product_quantity=product_quantity
        )
        try:
            _ = session.add(bill_detail)
            _ = session.commit()
        except Exception:
            raise HTTPException(
                status_code=400, detail='The cart or product/service not found'
            )
    return {"Message": "Successfully added a product"}
