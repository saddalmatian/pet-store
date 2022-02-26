
from sqlalchemy import null
from app.utils import db_helper
from app.api.models.domains import \
    (
        products as _domain_products,
        images as _domain_images,
        pet_types as _domain_pettypes
    )
from app.utils.db_helper import engine
from sqlmodel import Session, select
from fastapi import UploadFile, File, HTTPException
from operator import and_


def create_new_product(
    product_quantity: int, product_name: str,
    product_description: str, product_cost: int,
    product_type: str, pet_type_name: str,
    image_display: UploadFile = File(...)
) -> dict:
    product_id = db_helper.generate_ksuid()
    product_detail_id = db_helper.generate_ksuid()
    product_sold = 0
    # Create 2 model PetType, ProductType for checking
    pet_type = _domain_pettypes.PetTypeSQL
    product_type_sql = _domain_products.ProductTypeSQL
    try:
        with Session(engine) as session:
            statement = select(pet_type).where(
                pet_type.pet_type_name == pet_type_name
            )
            result = session.exec(statement)
            for pet_type in result:
                pet_type_id = pet_type.pet_type_id
            statement = select(product_type_sql).where(
                and_(
                    product_type_sql.product_type == product_type,
                    product_type_sql.pet_type_id == pet_type_id
                )
            )
            result = session.exec(statement)
            # Get product_type_id
            for product_type_detail in result:
                product_type_id = product_type_detail.product_type_id
            # Create model Product
            product = _domain_products.ProductSQL(
                product_id=product_id,
                product_name=product_name,
                product_quantity=product_quantity,
                product_sold=product_sold,
                product_type_id=product_type_id
            )
            # Create model ProductDetail
            product_detail = _domain_products.ProductDetailSQL(
                product_detail_id=product_detail_id,
                product_id=product_id,
                product_description=product_description,
                product_cost=product_cost,
            )
            service_id = null
            image_display_bool = 1
            image_id = db_helper.generate_ksuid()
            # Save file
            image_source = f'app/media/product/{image_display.filename}'
            with open(image_source, "wb+") as file_object:
                file_object.write(image_display.file.read())
            # Create model Image
            image = _domain_images.ImageSQL(
                image_id=image_id,
                product_id=product_id,
                service_id=service_id,
                image_source=image_source,
                image_display=image_display_bool
            )
            session.add(product)
            session.add(image)
            session.commit()
            session.add(product_detail)
            session.commit()
    except Exception:
        raise HTTPException(
            400, 'The product item is already in the database'
        )
    response = {
        'ProductName': product_name,
        'ProductCost': product_cost,
        'ProductQuantity': product_quantity
    }
    return response
