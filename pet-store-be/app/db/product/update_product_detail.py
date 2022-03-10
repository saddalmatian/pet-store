from app.api.models.domains import \
    (
        products as _domain_products,
    )
from app.utils.db_helper import engine
from sqlmodel import Session, select
from fastapi import HTTPException
from app.api.models.schemas import products as _schemas_product


def update_product_detail(
    product_up_in: _schemas_product.ProductUpIn
) -> dict:
    product = _domain_products.ProductSQL
    product_id = product_up_in.product_id
    product_cost = product_up_in.product_cost
    product_description = product_up_in.product_description
    product_name = product_up_in.product_name
    product_quantity = product_up_in.product_quantity

    with Session(engine) as session:
        statement = select(product).where(
            product.product_id == product_id
        )
        # Update product sql
        results = session.exec(statement)
        try:
            product_result = results.one()
        except Exception:
            raise HTTPException(
                400, 'Product not found'
            )
        product_result.product_name = product_name
        product_result.product_quantity = product_quantity
        product_result.product_cost = product_cost
        product_result.product_description = product_result.product_description
        session.add(product_result)
        session.commit()
    return product_up_in
