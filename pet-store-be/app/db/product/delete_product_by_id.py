from app.utils.db_helper import engine
from sqlmodel import Session, select
from fastapi import HTTPException
from app.api.models.domains import (
    products as _domain_product,
    images as _domain_image
)
import os


def delete_product_by_id(
    product_id: str
) -> dict:
    product = _domain_product.ProductSQL
    image = _domain_image.ImageSQL
    try:
        with Session(engine) as session:
            statement = select(product).where(
                product.product_id == product_id
            )
            results = session.exec(statement)
            product = results.one()
            statement = select(image).where(
                image.product_id == product_id
            )
            results = session.exec(statement)
            session.delete(product)
            session.commit()
            image = results.one()
            image_source = image.image_source
            image_source = image_source.replace(
                'http://127.0.0.1:8000/images/get-image?image_path=', ''
            ).replace('%2F', '/')
            os.remove(image_source)
    except Exception:
        raise HTTPException(
            400, 'The product id is not existed !'
        )
    response = {
        "Message": "Delete item successfully"
    }
    return response
