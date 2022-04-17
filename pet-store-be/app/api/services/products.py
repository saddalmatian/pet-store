from datetime import date
from app.api.models.schemas import \
    products as _schemas_product
from app.db.product.create_new_product import create_new_product
from app.db.product.get_all_products import get_all_products_in_db
from app.db.product.create_new_product_type import create_new_product_type
from app.db.product.update_product_detail import update_product_detail
from app.db.product.delete_product_by_id import delete_product_by_id
from app.db.product.get_product_details import get_product_details
from app.db.product.get_all_type import get_all_type
from app.db.product.get_random_products import get_random_products
from app.db.product.update_product_type_name import update_product_type_name
from fastapi import HTTPException, UploadFile
from typing import Optional
from app.utils.security import is_admin, is_employee_or_customer
from typing import List


def create_product(
    product_quantity: int, product_name: str,
    product_description: str, product_cost: int,
    product_type: str, pet_type_name: str,
    brand_name: str, username: str,
    product_original_cost: str,
    image_list: List[UploadFile],
) -> _schemas_product.ProductCreResp:
    user = is_employee_or_customer(username)
    if user == 'employee':
        response = create_new_product(
            product_quantity, product_name,
            product_description, product_cost,
            product_type, pet_type_name,
            brand_name, product_original_cost,
            image_list,
        )
        return response
    raise HTTPException(
        status_code=401, detail='You don\'t have permission to do this'
    )


def create_product_type(
    product_type_in: _schemas_product.ProductTypeCreIn,
    username: str
) -> _schemas_product.ProductTypeResp:
    user = is_employee_or_customer(username)
    if user == 'employee':
        response = create_new_product_type(
            product_type_in
        )
    return response


def get_all_products(
    product_type_id: Optional[str],
    pet_type_id: Optional[str],
    most_sold: Optional[bool],
    order_by: str,
    search_text: str
) -> list:
    response = get_all_products_in_db(
        product_type_id, pet_type_id,
        most_sold, order_by,
        search_text
    )
    return response


def update_product(
    product_quantity,
        product_name: str, product_description: str,
        product_cost: str, product_type: str,
        pet_type_name: str, brand_name: str,
        product_original_cost: int, product_id: str,
        product_date_in: date, product_date_out: date,
        image_list: list, username: str
) -> _schemas_product.ProductUpResp:
    user = is_employee_or_customer(username)
    if user == 'employee':
        response = update_product_detail(
            product_quantity,
            product_name, product_description,
            product_cost, product_type,
            pet_type_name, brand_name,
            product_original_cost,
            product_id, product_date_in,
            product_date_out, image_list
        )
        return response
    raise HTTPException(
        status_code=401, detail='You don\'t have permission to do this'
    )


def delete_product(
    product_id: str, username: str
) -> dict:
    user = is_employee_or_customer(username)
    if user == 'employee':
        response = delete_product_by_id(
            product_id
        )
        return response
    raise HTTPException(
        status_code=401, detail='You don\'t have permission to do this'
    )


def get_product_detail(
    product_id: str
):
    response = get_product_details(
        product_id
    )
    return response


def get_all_product_type(
) -> _schemas_product.ProductTypeGetResp:
    response = get_all_type()
    return response


def get_random_product(product_type_id: str):
    resposne = get_random_products(product_type_id)
    return resposne


def update_product_type(
    product_type_id, product_type_name,
    username
):
    _ = is_admin(username)
    _ = update_product_type_name(product_type_id, product_type_name)
    return {
        "Message": "Update product type successfully"
    }
