from fastapi import HTTPException
from app.api.models.domains import (
    bills as _domain_bills
)
from operator import and_
from app.api.models.domains import\
    (
        products as _domain_products,
        images as _domain_images,
        comments as _domain_comments,
        rates as _domain_rates,
        pet_types as _domain_pettypes,
        brands as _domain_brands
    )
from app.utils.db_helper import engine
from sqlmodel import Session, select


def update_product_quantity_in_bill(bill_id: str):
    bill = _domain_bills.BillDetailSQL
    with Session(engine) as session:
        statement = select(bill).where(bill.bill_id == bill_id)
        result = session.exec(statement)
        for product in result:
            product_sql = _domain_products.ProductSQL
            product_id = product.product_id
            product_quantity = product.product_quantity
            statement = select(product_sql).where(
                product_sql.product_id == product_id
            )
            result = session.exec(statement).one()
            result.product_quantity = result.product_quantity-product_quantity
            session.add(result)
        session.commit()