from app.utils import db_helper
from app.api.models.domains import \
    (
        products as _domain_products,
    )
from app.utils.db_helper import engine
from sqlmodel import Session, select
from fastapi import HTTPException
from app.api.models.schemas import products as _schemas_product
from app.api.models.domains import pet_types as _domain_pet_type


def create_new_product_type(
    product_type_in: _schemas_product.ProductTypeCreIn
) -> dict:
    pet_type = _domain_pet_type.PetTypeSQL
    product_type_id = db_helper.generate_ksuid()
    product_type_name = product_type_in.product_type
    pet_type_name_in = product_type_in.pet_type_name
    try:
        with Session(engine) as session:
            statement = select(pet_type).where(
                pet_type.pet_type_name == pet_type_name_in
            )
            results = session.exec(statement)
            for item in results:
                pet_type_id = item.pet_type_id
            product_type_cre = _domain_products.ProductTypeSQL(
                product_type_id=product_type_id,
                product_type=product_type_name,
                pet_type_id=pet_type_id
            )
            session.add(product_type_cre)
            session.commit()
    except Exception:
        raise HTTPException(
            400, 'The product type item is already in the database'
        )
    response = {
        'ProductTypeID': product_type_id,
        'ProductType': product_type_name,
        'PetTypeName': pet_type_name_in
    }
    return response
