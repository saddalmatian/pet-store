from app.api.models.domains import (
    images as _domain_images,
    products as _domain_products
)
from app.utils.db_helper import engine
from sqlmodel import Session, select, func


def get_random_products(product_type_id: str):
    product = _domain_products.ProductSQL
    response = []
    i = 0
    with Session(engine) as session:
        statement = select(product).where(
            product.product_type_id == product_type_id
        ).order_by(func.random())
        result = session.exec(statement)
        for product in result:
            if i != 5:
                list_img = []
                image = _domain_images.ImageSQL
                statement_image = select(image).where(
                    image.product_id == product.product_id)
                result_img = session.exec(statement_image)
                for img in result_img:
                    _ = list_img.append(img)
                temp_res = {
                    "ListImgs": list_img,
                    "ProductDetail": product.dict()
                }
                _ = response.append(temp_res)
                i += 1
            else:
                break
    return response
