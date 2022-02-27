from app.api.models.schemas import \
    products as _schemas_product
from app.db.product.create_new_product import create_new_product
from app.db.product.get_all_products import get_all_products_in_db
from app.db.product.create_new_product_type import create_new_product_type
from app.db.product.update_product_detail import update_product_detail
from fastapi import UploadFile, File
from typing import List


def create_product(
    product_quantity: int, product_name: str,
    product_description: str, product_cost: int,
    product_type: str, pet_type_name: str,
    image_display: UploadFile = File(...)
) -> _schemas_product.ProductResp:
    response = create_new_product(
        product_quantity, product_name,
        product_description, product_cost,
        product_type, pet_type_name,
        image_display,
    )
    return response


def create_product_type(
    product_type_in: _schemas_product.ProductTypeCreIn
) -> _schemas_product.ProductTypeResp:
    response = create_new_product_type(
        product_type_in
    )
    return response


def get_all_products(
    filter: _schemas_product.ProductGetAllIn
) -> List[_schemas_product.ProductGetAllResp]:
    response = get_all_products_in_db(
        filter
    )
    return response


def update_product(
    product_up_in: _schemas_product.ProductUpIn
):
    response = update_product_detail(
        product_up_in
    )
    return response
