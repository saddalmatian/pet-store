from pydantic import BaseModel, Field
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
    _rate_domain.RateStarNumber, _product_domain.ProductType,
    _product_domain.ProductTypeID, _pet_type_domain.PetTypeName,
    _pet_type_domain.PetTypeID
):
    list_comments: Optional[List[dict]] = Field(alias='ListComments')
    comments_amount: int = Field(alias='CommentAmounts')


class ProductTypeGetResp(BaseModel):
    list_type: List[dict] = Field(..., alias='Listype')

    class Config:
        schema_extra = {
            "Listype": [
                {
                    "Bird": [
                        {
                            "ProductType": "Accessories",
                            "ProductTypeID": "25e4pi93eFipon10x68"
                        },
                        {
                            "ProductType": "Food",
                            "ProductTypeID": "25e4pz4iMotJnOv7Mp6"
                        }
                    ],
                    "Cat": [
                        {
                            "ProductType": "Accessories",
                            "ProductTypeID": "25e4pOk9ANpVrPmPHxs"
                        },
                        {
                            "ProductType": "Food",
                            "ProductTypeID": "25e4qI6XQoe2lCQEcM1"
                        },
                        {
                            "ProductType": "Hygiene",
                            "ProductTypeID": "25e4rbrfym7t7QQgf6S"
                        }
                    ],
                    "Dog": [
                        {
                            "ProductType": "Accessories",
                            "ProductTypeID": "25e4orCMpwimZ7PosXL"
                        },
                        {
                            "ProductType": "Food",
                            "ProductTypeID": "25e4qYhLwy26VkCl78U"
                        },
                        {
                            "ProductType": "Hygiene",
                            "ProductTypeID": "25e4rP5ds5RdoOkP0d4"
                        }
                    ]
                }
            ]
        }
