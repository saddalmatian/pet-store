from app.api.models.domains import comments as _domain_comment
from app.utils.db_helper import generate_ksuid
from app.utils.db_helper import engine
from sqlmodel import Session
from fastapi import HTTPException


def comment_product(
    username: str, comment_detail: str,
    comment_rep_target: str,  product_id: str,
    comment_main: bool = True
):
    comment_id = generate_ksuid()
    comment = _domain_comment.CommentSQL(
        comment_id=comment_id,
        commentor_name=username,
        product_id=product_id,
        comment_detail=comment_detail,
        comment_rep_target=comment_rep_target,
        comment_main=comment_main
    )
    try:
        with Session(engine) as session:
            session.add(comment)
            session.commit()
    except Exception:
        raise HTTPException(
            404, 'Can not find product id'
        )
    return "Comment successfully !"
