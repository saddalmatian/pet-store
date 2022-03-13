from fastapi import UploadFile, File, HTTPException
from typing import List
# from app.api.models.schemas import \
#     images as _schemas_image
from app.utils import db_helper
from app.api.models.domains import \
    (
        images as _domain_images,
        products as _domain_products
    )
from app.utils.db_helper import engine
from sqlmodel import Session, select


def upload_new_multiple_images(
    product_id: str, image_file: List[UploadFile] = File(...)
) -> str:
    image_display_bool = 0
    product = _domain_products.ProductSQL
    with Session(engine) as session:
        statement = select(product).where(
            product.product_id == product_id
        )
        results = session.exec(statement)
        try:
            _ = results.one()
        except Exception:
            raise HTTPException(
                400, 'Product not found'
            )
        for image in image_file:
            image_id = db_helper.generate_ksuid()
            # Save file
            image_source = f'app/media/product/{image.filename}'
            with open(image_source, "wb+") as file_object:
                file_object.write(image.file.read())
        # # Create model Image
            image = _domain_images.ImageSQL(
                image_id=image_id,
                product_id=product_id,
                image_source=image_source,
                image_display=image_display_bool
            )
            session.add(image)
        try:
            session.commit()
        except Exception:
            raise HTTPException(
                400, 'One of these images has already existed in the database'
            )
    return "Add images successfully"
