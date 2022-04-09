from operator import and_
from app.api.models.domains import\
    (
        products as _domain_products,
        images as _domain_images,
        comments as _domain_comments,
        rates as _domain_rates,
        pet_types as _domain_pettypes,
        brands as _domain_brands
    )
from app.utils.db_helper import engine
from sqlmodel import Session, select


def get_product_details(
    product_id: str
) -> dict:
    product = _domain_products.ProductSQL
    product_type = _domain_products.ProductTypeSQL
    image = _domain_images.ImageSQL
    comment = _domain_comments.CommentSQL
    rate = _domain_rates.RateSQL
    pettype = _domain_pettypes.PetTypeSQL
    brand = _domain_brands.BrandSQL
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
        product_brand_id = product_result.brand_id
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
            commentor_name = comment_result.CommentSQL.commentor_name
            comments = {
                "CommentDetail": comment_detail,
                "CommentRepTarget": comment_rep_target,
                "CommentMain": comment_main,
                "CommentorName": commentor_name
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
        statment_producttype = select(product_type).where(
            product_result.product_type_id == product_type.product_type_id
        )
        result = session.exec(statment_producttype)
        product_type_result = result.one()
        product_type_id = product_type_result.product_type_id
        product_type = product_type_result.product_type
        pet_type_id = product_type_result.pet_type_id
        statement_pettype = select(pettype).where(
            pettype.pet_type_id == pet_type_id)
        result = session.exec(statement_pettype).one()
        pet_type_name = result.pet_type_name
        statement = select(brand).where(brand.brand_id == product_brand_id)
        result = session.exec(statement).one()
        brand_name = result.brand_name
    response = {
        "RateStarNumber": rate_number,
        "ProductDescription": product_description,
        "ProductID": product_id,
        "ProductName": product_name,
        "ProductCost": product_cost,
        "ProductQuantity": product_quantity,
        "ListImages": list_images,
        "ListComments": list_comments,
        "CommentAmounts": comment_amount,
        "ProductTypeID": product_type_id,
        "ProductType": product_type,
        "PetTypeID": pet_type_id,
        "PetTypeName": pet_type_name,
        "BrandName": brand_name
    }
    return response
