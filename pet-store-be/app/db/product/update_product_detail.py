from datetime import date
from app.api.models.domains import \
    (
        products as _domain_products,
        brands as _domain_brands,
        pet_types as _domain_pettypes,
        images as _domain_images
    )
from app.utils.db_helper import engine, generate_ksuid
from sqlmodel import Session, select
from fastapi import HTTPException
from operator import and_


def update_product_detail(
    product_quantity: str,
    product_name: str, product_description: str,
    product_cost: str, product_type: str,
    pet_type_name: str, brand_name: str,
    product_original_cost: int,
    product_id: str, product_date_in: date,
    product_date_out: date, image_list: list
) -> dict:
    product = _domain_products.ProductSQL
    brand = _domain_brands.BrandSQL
    pet_type = _domain_pettypes.PetTypeSQL
    product_type_sql = _domain_products.ProductTypeSQL

    brand_name = brand_name
    pet_type_name = pet_type_name
    product_type = product_type
    with Session(engine) as session:

        statement_brand = select(brand).where(
            brand.brand_name == brand_name
        )
        try:
            result_brand = session.exec(statement_brand).first()
            brand_id = result_brand.brand_id
        except Exception:
            raise HTTPException(
                400, 'There is no brand like this'
            )

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
        product_result.product_description = product_description
        product_result.product_date_in = product_date_in
        product_result.product_date_out = product_date_out
        product_result.product_original_cost = product_original_cost
        product_result.brand_id = brand_id
        product_result.product_type_id = product_type_id
        response = {**product_result.dict()}
        session.add(product_result)
        session.commit()
        count = 0

        image = _domain_images.ImageSQL
        statement = select(image).where(image.product_id == product_id)
        result = session.exec(statement)
        for image in result:
            session.delete(image)
            session.commit()

        for image_display in image_list:
            image_display_bool = 0
            if count == 0:
                image_display_bool = 1
            count += 1
            image_id = generate_ksuid()
            # Save file
            image_prefix = 'http://127.0.0.1:8000/images/get-image?image_path='
            image_src = f'app/media/product/{image_id+image_display.filename}'
            with open(image_src, "wb+") as file_object:
                file_object.write(image_display.file.read())
            # Create model Image
            image_src = image_prefix + image_src.replace('/', '%2F')
            image = _domain_images.ImageSQL(
                image_id=image_id,
                product_id=product_id,
                image_source=image_src,
                image_display=image_display_bool
            )
            session.add(image)
            session.commit()
    return response
