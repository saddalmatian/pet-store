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


class PromotionalInUp(PromotionalIn, _promational_domains.PromotionalID):
    pass
