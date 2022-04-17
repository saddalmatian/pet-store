from operator import and_
from app.api.models.domains import\
    (
        products as _domain_products,
        images as _domain_images,
        comments as _domain_comments,
        rates as _domain_rates,
        pet_types as _domain_pettypes,
        brands as _domain_brands,
        promotionals as _domain_promotionals
    )
from app.utils.db_helper import engine
from sqlmodel import Session, select


def round_off_rating(number):
    """Round a number to the closest half integer.
    >>> round_off_rating(1.3)
    1.5
    >>> round_off_rating(2.6)
    2.5
    >>> round_off_rating(3.0)
    3.0
    >>> round_off_rating(4.1)
    4.0"""

    return round(number * 2) / 2


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
        product_original_cost = product_result.product_original_cost
        product_date_in = product_result.product_date_in
        product_date_out = product_result.product_date_out
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
        rate = _domain_rates.RateSQL
        statement = select(rate).where(rate.product_id == product_id)
        result = session.exec(statement)
        rate_list = []
        for rate in result:
            rate_list.append(rate.rate_star_number)
        avg_rate = 0
        if rate_list:
            avg_rate = sum(rate_list)/len(rate_list)
        statment_producttype = select(product_type).where(
            product_result.product_type_id == product_type.product_type_id
        )
        avg_rate = round_off_rating(avg_rate)
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
        propro = _domain_promotionals.ProProSQL
        statement = select(propro).where(propro.product_id == product_id)
        result_propro = session.exec(statement).first()
        result_promotional = {
            "promotional_name": "",
            "promotional_sale": 0,
            "promotional_end_date": "",
            "promotional_start_date": "",
            "promotional_description": "",
            "promotional_id": ""
        }
        if result_propro:
            promotional_id = result_propro.promotional_id
            promotion = _domain_promotionals.PromotionalSQL
            statement = select(promotion).where(
                promotion.promotional_id == promotional_id)
            result_promo = session.exec(statement).first()
            result_promotional = {**result_promo.dict()}
    response = {
        "RateStarNumber": avg_rate,
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
        "BrandName": brand_name,
        "ProductOriginalCost": product_original_cost,
        "ProductDateIn": product_date_in,
        "ProductDateOut": product_date_out,
        "Promotional": result_promotional,
    }
    return response
