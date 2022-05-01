from app.api.models.domains import (
    comments as _domain_comment,
    rates as _domain_rate
)
from app.utils.db_helper import engine, get_userid_from_username
from sqlmodel import Session, select, and_
from fastapi import HTTPException


def get_comments_on_product(product_id: str) -> dict:
    response = []
    comment = _domain_comment.CommentSQL
    rate = _domain_rate.RateSQL
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
                customer_id = get_userid_from_username(
                    comment.commentor_name, is_customer=True
                )
                statement = select(rate).where(
                    and_(
                        rate.product_id == product_id,
                        rate.customer_id == customer_id
                    )
                )
                result = session.exec(statement).first()
                if result:
                    data_resp.update(
                        {
                            "RateStarNumber": result.rate_star_number
                        }
                    )
                response.append(data_resp)
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
