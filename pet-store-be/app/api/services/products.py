
from app.api.models.schemas import \
    products as _schemas_product
from app.db.product.create_new_product import create_new_product


def create_product(
    product_in: _schemas_product.ProductCreIn
) -> _schemas_product.ProductResp:
    response = create_new_product(product_in)
    return response
