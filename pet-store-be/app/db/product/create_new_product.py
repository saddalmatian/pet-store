
from datetime import datetime
from app.utils import db_helper
from app.api.models.domains import \
    (
        products as _domain_products,
        images as _domain_images,
        pet_types as _domain_pettypes,
        brands as _domain_brands
    )
from app.utils.db_helper import engine
from sqlmodel import Session, select
from fastapi import UploadFile, HTTPException
from operator import and_
from typing import List


def create_new_product(
    product_quantity: int, product_name: str,
    product_description: str, product_cost: int,
    product_type: str, pet_type_name: str,
    brand_name: str, product_original_cost: int,
    image_list: List[UploadFile]
) -> dict:
    product_id = db_helper.generate_ksuid()
    product_sold = 0
    # Create 2 model PetType, ProductType for checking
    pet_type = _domain_pettypes.PetTypeSQL
    product_type_sql = _domain_products.ProductTypeSQL
    brand = _domain_brands.BrandSQL
    if product_original_cost >= product_cost:
        raise HTTPException(
            status_code=400,
            detail="The original cost must smaller than sale cost"
        )
    with Session(engine) as session:
        statement = select(pet_type).where(
            pet_type.pet_type_name == pet_type_name
        )
        result = session.exec(statement)
        try:
            pet_type = result.one()
        except Exception:
            raise HTTPException(
                400, 'There is no pet type like that!'
            )
        pet_type_id = pet_type.pet_type_id
        statement = select(product_type_sql).where(
            and_(
                product_type_sql.product_type == product_type,
                product_type_sql.pet_type_id == pet_type_id
            )
        )
        result = session.exec(statement)
        try:
            # Get product type id
            product_type_detail = result.one()
            product_type_id = product_type_detail.product_type_id
        except Exception:
            raise HTTPException(
                400, 'There is no product type like that!'
            )
        statement = select(brand).where(
            brand.brand_name == brand_name
        )
        result = session.exec(statement)
        try:
            brand_result = result.one()
            brand_id = brand_result.brand_id
        except Exception:
            raise HTTPException(
                400, 'THere is no brand like that'
            )
            # Create model Product
        product_date_in = datetime.now().strftime("%Y-%m-%d")
        product = _domain_products.ProductSQL(
            product_id=product_id,
            product_name=product_name,
            product_quantity=product_quantity,
            product_sold=product_sold,
            product_type_id=product_type_id,
            product_description=product_description,
            product_cost=product_cost,
            brand_id=brand_id,
            product_original_cost=product_original_cost,
            product_date_in=product_date_in,
            product_date_out=None
        )
        image_display_bool = 1
        session.add(product)
        session.commit()
        for image in image_list:
            image_id = db_helper.generate_ksuid()
            # Save file
            image_prefix = 'http://127.0.0.1:8000/images/get-image?image_path='
            image_src = f'app/media/product/{image_id+image.filename}'
            with open(image_src, "wb+") as file_object:
                file_object.write(image.file.read())
            # Create model Image
            image_src = image_prefix + image_src.replace('/', '%2F')
            image = _domain_images.ImageSQL(
                image_id=image_id,
                product_id=product_id,
                image_source=image_src,
                image_display=image_display_bool
            )

            image_display_bool = 0
            session.add(image)
            session.commit()

    response = {
        'ProductName': product_name,
        'ProductCost': product_cost,
        'ProductQuantity': product_quantity
    }
    return response
