from fastapi import APIRouter
from app.api.models.schemas import \
    products as _schemas_product
from app.api.services import products \
    as _service_product

router = APIRouter(
    prefix="/product",
    tags=["Product"]
)


@router.post(
    "/create-product",
    response_model=_schemas_product.ProductResp)
async def create_product(
    product_in: _schemas_product.ProductCreIn
):
    response = _service_product.create_product(product_in)
    return response
