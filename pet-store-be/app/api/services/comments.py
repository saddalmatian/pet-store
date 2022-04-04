from app.api.models.schemas import comments as _schemas_comment
from app.db.comment.comment_on_product import comment_product
from app.db.comment.get_comments_on_product import get_comments_on_product


def comment_on_product(
    username: str, comment_in: _schemas_comment.CommentIn
):
    response = comment_product(username, **comment_in.dict())
    return response


def get_comments(
    product_id: str
) -> _schemas_comment.CommentGetAll:
    response = get_comments_on_product(product_id)
    return response
