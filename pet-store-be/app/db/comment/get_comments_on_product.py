from app.api.models.domains import (
    comments as _domain_comment,
    products as _domain_product
)
from app.utils.db_helper import generate_ksuid
from app.utils.db_helper import engine
from sqlmodel import Session, select
from fastapi import HTTPException


def get_comments_on_product(product_id: str) -> dict:
    response = []
    comment = _domain_comment.CommentSQL
    total_comments = 0
    try:
        with Session(engine) as session:
            statment = select(comment).where(comment.product_id == product_id)
            result = session.exec(statment)
            for comment in result:
                data_resp = {
                    "CommentorName": comment.commentor_name,
                    "CommentMain": comment.comment_main,
                    "CommentDetail": comment.comment_detail,
                    "CommentRepTarget": comment.comment_rep_target,
                    "ProductID": comment.product_id
                }
                _ = response.append(data_resp)
    except Exception:
        raise HTTPException(
            404, 'Can not find product id'
        )
    total_comments = len(response)
    final_response = {
        "ListComments": response,
        "TotalComments": total_comments
    }
    return final_response
