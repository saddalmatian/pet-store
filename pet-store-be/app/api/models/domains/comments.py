from pydantic import BaseModel
from sqlmodel import Field, SQLModel


class CommentSQL(SQLModel, table=True):
    __tablename__ = "comment"
    comment_id: str = Field(primary_key=True)
    commentor_name: str
    product_id: str = Field(foreign_key="product.product_id")
    comment_detail: str
    comment_rep_target: str
    comment_main: bool


class CommentId(BaseModel):
    comment_id: str = Field(..., alias='CommentId')


class CommentorName(BaseModel):
    commentor_name: str = Field(..., alias='CommentorName')


class CommentDetail(BaseModel):
    comment_detail: str = Field(..., alias='CommentDetail')


class CommentRepTarget(BaseModel):
    comment_rep_target: str = Field(default='', alias='CommentRepTarget')


class CommentMain(BaseModel):
    comment_main: bool = Field(..., alias='CommentMain')
