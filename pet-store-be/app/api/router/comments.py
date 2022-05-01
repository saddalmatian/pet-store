from fastapi import APIRouter, Header
from app.api.models.schemas import \
    comments as _schemas_comment
from app.api.services import comments \
    as _service_comments
from app.utils.security import get_username_from_token
router = APIRouter(
    prefix="/comments",
    tags=["Comment"]
)


@router.post(
    "/comment-on-product"
)
async def comment_on_product(
    comment_in: _schemas_comment.CommentIn,
    authorization_token: str = Header(None)
):
    username = get_username_from_token(authorization_token)
    response = _service_comments.comment_on_product(
        username, comment_in
    )
    return response


@router.get(
    "/get-all-comments"
)
async def get_comments(
    product_id: str,
    authorization_token: str = Header(None),
):
    _ = get_username_from_token(authorization_token)
    response = _service_comments.get_comments(
        product_id
    )
    return response
