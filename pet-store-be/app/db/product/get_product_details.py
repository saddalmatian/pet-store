from operator import and_
from app.api.models.domains import\
    (
        products as _domain_products,
        images as _domain_images,
        comments as _domain_comments,
        rates as _domain_rates
    )
from app.utils.db_helper import engine
from sqlmodel import Session, select


def get_product_details(
    product_id: str
) -> dict:
    product = _domain_products.ProductSQL
    image = _domain_images.ImageSQL
    comment = _domain_comments.CommentSQL
    rate = _domain_rates.RateSQL
    with Session(engine) as session:
        statement = select(product).where(
            product.product_id == product_id
        )
        results = session.exec(statement)
        product_result = results.one()
        product_description = product_result.product_description
        product_name = product_result.product_name
        product_cost = product_result.product_cost
        product_quantity = product_result.product_quantity
        statement_image = select(product, image).where(
            and_(
                product.product_id == image.product_id,
                product.product_id == product_id
            )
        )
        list_images = []
        results_image = session.exec(statement_image)
        for image_result in results_image:
            image_src = image_result.ImageSQL.image_source
            image_display = image_result.ImageSQL.image_display
            images = {
                "ImageSource": image_src,
                "ImageDisplay": image_display
            }
            list_images.append(images)
        statement_comment = select(product, comment).where(
            and_(
                product.product_id == comment.product_id,
                product.product_id == product_id
            )
        )
        list_comments = []
        results_comment = session.exec(statement_comment)
        comment_amount = 0
        for comment_result in results_comment:
            comment_detail = comment_result.CommentSQL.comment_detail
            comment_rep_target = comment_result.CommentSQL.comment_rep_target
            comment_main = comment_result.CommentSQL.comment_main
            comments = {
                "CommentDetail": comment_detail,
                "CommentRepTarget": comment_rep_target,
                "CommentMain": comment_main
            }
            list_comments.append(comments)
        comment_amount = len(list_comments)

        rate_number = 0
        try:
            statement_rate = select(product, rate).where(
                and_(
                    product.product_id == rate.product_id,
                    product.product_id == product_id
                )
            )
            results_rate = session.exec(statement_rate)
            result_rate = results_rate.one()
            rate_number = result_rate.RateSQL.rate_star_number
        except Exception:
            rate_number = 0
    response = {
        "RateStarNumber": rate_number,
        "ProductDescription": product_description,
        "ProductID": product_id,
        "ProductName": product_name,
        "ProductCost": product_cost,
        "ProductQuantity": product_quantity,
        "ListImages": list_images,
        "ListComments": list_comments,
        "CommentAmounts": comment_amount
    }
    return response
