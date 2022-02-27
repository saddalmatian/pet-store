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
    product_detail = _domain_products.ProductDetailSQL
    product_id = product_up_in.product_id
    product_cost = product_up_in.product_cost
    product_description = product_up_in.product_description
    product_name = product_up_in.product_name
    product_quantity = product_up_in.product_quantity
    product_color = product_up_in.product_color
    product_size = product_up_in.product_size
    list_product_color = []
    list_product_size = []
    if product_color:
        list_product_color = list(
            map(lambda x: x.product_color, product_color))
    if product_size:
        list_product_size = list(map(lambda x: x.product_size, product_size))
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
        session.add(product_result)
        # Update product detail
        statement = select(product_detail).where(
            product_detail.product_id == product_id
        )
        results = session.exec(statement)
        product_detail_result = results.one()
        product_detail_id = product_detail_result.product_detail_id
        product_detail_result.product_description = product_description
        product_detail_result.product_cost = product_cost
        session.add(product_detail_result)
        # Update product color, size
        if list_product_color:
            for product_color in list_product_color:
                temp_column = product_detail_id+product_color
                color = _domain_products.ColorSQL(
                    product_detail_id=product_detail_id,
                    product_color=product_color,
                    temp_column=temp_column
                )
                session.add(color)
        if list_product_size:
            for product_size in list_product_size:
                temp_column = product_detail_id+product_size
                size = _domain_products.SizeSQL(
                    product_detail_id=product_detail_id,
                    product_size=product_size,
                    temp_column=temp_column
                )
                session.add(size)
        if list_product_color or list_product_size:
            try:
                session.commit()
            except Exception:
                raise HTTPException(
                    400, 'This item already have these colors or sizes'
                )
    return "response"
