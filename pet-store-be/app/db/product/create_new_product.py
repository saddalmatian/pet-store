
from app.api.models.schemas import \
    products as _schemas_product
from app.utils import db_helper
from app.api.models.domains import products\
    as _domain_products
from app.utils.db_helper import engine
from sqlmodel import Session


def create_new_product(
    product_in: _schemas_product.ProductCreIn
) -> dict:
    product_id = db_helper.generate_ksuid()
    product_name = product_in.product_name
    product_quantity = product_in.product_quantity
    pet_type_id = product_in.pet_type_id
    product_sold = 0
    product = _domain_products.ProductSQL(
        product_id=product_id,
        product_name=product_name,
        product_quantity=product_quantity,
        product_sold=product_sold,
        pet_type_id=pet_type_id
    )
    with Session(engine) as session:
        session.add(product)
        response = session.commit()
    return response
