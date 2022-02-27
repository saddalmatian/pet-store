from app.api.models.domains import (
    products as _product_domain,
    images as _image_domain,
    rates as _rate_domain,
    pet_types as _pet_type_domain
)
from typing import List, Optional


class ProductGetAllIn(
    _product_domain.ProductTypeIDGetAll
):
    pass


class ProductResp(
    _product_domain.ProductName, _product_domain.ProductQuantity,
    _product_domain.ProductCost
):
    pass


class ProductGetAllResp(
    _product_domain.ProductCost, _product_domain.ProductName,
    _image_domain.ImageSource, _rate_domain.RateStarNumber
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
    product_color:  Optional[List[_product_domain.ProductColor]]
    product_size:  Optional[List[_product_domain.ProductSize]]


class ProductUpResp(ProductUpIn):
    pass
