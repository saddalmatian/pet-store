from sqlmodel import Field, SQLModel


class CommentSQL(SQLModel, table=True):
    __tablename__ = "comment"
    comment_id: str = Field(primary_key=True)
    commentor_id: str
    product_id: str = Field(foreign_key="product.product_id")
    comment_detail: str
    comment_rep_target: str
    comment_main: bool
