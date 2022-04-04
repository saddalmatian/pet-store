from fastapi import APIRouter, Form, UploadFile, File, Header
from typing import List, Optional
from app.api.models.schemas import \
    products as _schemas_product
from app.api.services import products \
    as _service_product
from app.utils.security import get_username_from_token
router = APIRouter(
    prefix="/product",
    tags=["Product"]
)


@router.post(
    "/create-product",
    response_model=_schemas_product.ProductCreResp
)
async def create_product(
    image_display: UploadFile = File(...), product_quantity: int = Form(...),
    product_name: str = Form(...), product_description: str = Form(...),
    product_cost: int = Form(...), product_type: str = Form(...),
    pet_type_name: str = Form(...), brand_name: str = Form(...),
    product_original_cost: int = Form(...),
    authorization_token: str = Header(None),
):
    # username = get_username_from_token(authorization_token)
    username = 'admin'
    response = _service_product.create_product(
        product_quantity, product_name,
        product_description, product_cost,
        product_type, pet_type_name,
        brand_name, username,
        product_original_cost,
        image_display
    )
    return response


@router.post(
    "/get-all-products",
    response_model=List[_schemas_product.ProductGetAllResp]
)
async def get_all_products(
    product_type_id: Optional[_schemas_product.ProductGetAllIn],
):
    response = _service_product.get_all_products(product_type_id)
    return response


@router.put(
    "/update-product",
    response_model=_schemas_product.ProductUpResp
)
async def update_product(
    update_product_in: _schemas_product.ProductUpIn,
    authorization_token: str = Header(None),
):
    username = get_username_from_token(authorization_token)
    response = _service_product.update_product(update_product_in, username)
    return response


@router.post(
    "/create-product-type",
    response_model=_schemas_product.ProductTypeResp
)
async def create_product_type(
    product_type_in: _schemas_product.ProductTypeCreIn,
    authorization_token: str = Header(None)
):
    username = get_username_from_token(authorization_token)
    response = _service_product.create_product_type(
        product_type_in, username
    )
    return response


@router.delete(
    "/delete-product"
)
async def delete_product(
    product_id: str,
    authorization_token: str = Header(None)
):
    username = get_username_from_token(authorization_token)
    response = _service_product.delete_product(
        product_id, username
    )
    return response


@router.get(
    "/get-product-detail",
    response_model=_schemas_product.ProductDetailResp
)
async def get_product_detail(
    product_id: str
):
    response = _service_product.get_product_detail(product_id)
    return response


@router.get(
    "/get-all-product-type",
    response_model=_schemas_product.ProductTypeGetResp
)
async def get_all_product_type():
    response = _service_product.get_all_product_type()
    return response
