from typing import List
from pydantic import BaseModel, Field
from app.api.models.domains import comments as _domain_comment
from app.api.models.domains import products as _domain_product
from app.api.models.domains import rates as _domain_rate


class CommentIn(
    _domain_comment.CommentDetail, _domain_comment.CommentRepTarget,
    _domain_comment.CommentMain, _domain_product.ProductID
):
    pass


class CommentWithUser(
    _domain_comment.CommentorName, CommentIn,
    _domain_rate.RateStarNumber
):
    pass


class CommentGetAll(BaseModel):
    list_comments: List[CommentWithUser] = Field(..., alias='ListComments')
    total: int = Field(..., alias='TotalComments')
