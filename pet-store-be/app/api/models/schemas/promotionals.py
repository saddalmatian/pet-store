from app.api.models.domains import (
    promotionals as _promational_domains,
    products as _product_domains,
)
from typing import List
from pydantic import Field


class PromotionalIn(
    _promational_domains.PromotionalName,
    _promational_domains.PromotionalDesc, _promational_domains.PromotionalSale,
    _promational_domains.PromotionalStartDate,
    _promational_domains.PromotionalEndDate
):
    list_product_id: List[_product_domains.ProductID] = Field(
        ..., alias='ListProductIds'
    )

    class Config:
        schema_extra = {
            "PromotionalEndDate": "2022-04-23",
            "PromotionalStartDate": "2022-04-20",
            "PromotionalSale": 25,
            "PromotionalDesc": "Đây là khuyến mãi test",
            "PromotionalName": "TestPromo",
            "ListProductIds": [
                {
                    "ProductID": "27hdA2ax69FsVtOYbPy"
                },
                {
                    "ProductID": "27hdFgudaenFpMWUXi3"
                },
                {
                    "ProductID": "27hdJ40P2nH1FGIBxO8"
                },
                {
                    "ProductID": "27hdqq5z1Idb7qQs6hN"
                }
            ]
        }


class PromotionalInUp(PromotionalIn, _promational_domains.PromotionalID):
    pass
