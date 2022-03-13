from pydantic import Field
from app.api.models.domains import (
    products as _product_domain,
    images as _image_domain,
    rates as _rate_domain,
    pet_types as _pet_type_domain,
)
from app.api.models.schemas import images as _schema_images
from typing import List, Optional


class ProductGetAllIn(
    _product_domain.ProductTypeIDGetAll
):
    pass


class ProductCreResp(
    _product_domain.ProductName, _product_domain.ProductQuantity,
    _product_domain.ProductCost
):
    pass


class ProductGetAllResp(
    _product_domain.ProductCost, _product_domain.ProductName,
    _image_domain.ImageSource, _rate_domain.RateStarNumber,
    _product_domain.ProductID
):
    pass


class ProductTypeCreIn(
    _product_domain.ProductType,  _pet_type_domain.PetTypeName
):
    pass


class ProductTypeResp(
    _product_domain.ProductType, _product_domain.ProductTypeID,
    _pet_type_domain.PetTypeName
):
    pass


class ProductUpIn(
    _product_domain.ProductID, _product_domain.ProductName,
    _product_domain.ProductQuantity, _product_domain.ProductDescription,
    _product_domain.ProductCost
):
    list_images: List[_schema_images.ImageListResp] = Field(alias='ListImages')


class ProductUpResp(ProductUpIn):
    pass


class ProductDetailResp(
    ProductUpIn, _product_domain.ProductDescription,
    _rate_domain.RateStarNumber
):
    list_comments: Optional[List[dict]] = Field(alias='ListComments')
    comments_amount: int = Field(alias='CommentAmounts')
