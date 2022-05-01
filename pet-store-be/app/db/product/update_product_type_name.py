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


def update_product_type_name(product_type_id: str, product_type_name: str):
    product_type = _domain_products.ProductTypeSQL
    with Session(engine) as session:
        statement = select(product_type).where(
            product_type.product_type_id == product_type_id
        )
        result = session.exec(statement).first()
        result.product_type = product_type_name
        session.add(result)
        session.commit()
