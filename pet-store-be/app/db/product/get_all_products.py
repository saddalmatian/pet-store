from operator import and_
from app.api.models.domains import\
    (
        products as _domain_products,
        images as _domain_images
    )
from app.utils.db_helper import engine
from sqlmodel import Session, select


def get_all_products_in_db(
    product_type_id: str
) -> dict:
    product = _domain_products.ProductSQL
    image = _domain_images.ImageSQL
    if product_type_id:
        statement_filter = and_(
            product.product_id == image.product_id,
            product.product_type_id == product_type_id
        )
    else:
        statement_filter = (
            product.product_id == image.product_id
        )
    response = []
    with Session(engine) as session:
        statement = select(product, image).where(
            statement_filter)
        results = session.exec(statement)
        for item in results:
            product_name = item.ProductSQL.product_name
            product_id = item.ProductSQL.product_id
            image_source = item.ImageSQL.image_source
            product_cost = item.ProductSQL.product_cost
            item_dict = {
                "ProductID": product_id,
                "ProductName": product_name,
                "ImageSource": image_source,
                "ProductCost": product_cost,
                "RateStarNumber": 0
            }
            response.append(item_dict)
    return response
