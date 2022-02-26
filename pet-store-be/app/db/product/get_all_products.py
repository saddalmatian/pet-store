from operator import and_
from app.api.models.schemas import \
    products as _schemas_product
from app.api.models.domains import\
    (
        products as _domain_products,
        images as _domain_images
    )
from app.utils.db_helper import engine
from sqlmodel import Session, select


def get_all_products_in_db(
    filter: _schemas_product.ProductGetAllIn
) -> dict:
    product = _domain_products.ProductSQL
    image = _domain_images.ImageSQL
    product_detail = _domain_products.ProductDetailSQL
    response = []
    with Session(engine) as session:
        statement = select(product, image, product_detail).where(
            and_(
                product.product_id == image.product_id,
                product.product_id == product_detail.product_id
            )
        )
        results = session.exec(statement)
        for item in results:
            product_name = item.ProductSQL.product_name
            image_source = item.ImageSQL.image_source
            product_cost = item.ProductDetailSQL.product_cost
            item_dict = {
                "ProductName": product_name,
                "ImageSource": image_source,
                "ProductCost": product_cost,
                "RateStarNumber": 5
            }
            response.append(item_dict)
    return response
