from operator import and_
from app.api.models.domains import (
    images as _domain_images,
    products as _domain_products,
    promotionals as _domain_promotionals,
    rates as _domain_rates
)
from app.utils.db_helper import engine
from sqlmodel import Session, select, func


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


def get_random_products(product_type_id: str):
    product = _domain_products.ProductSQL
    final_response = []
    i = 0
    with Session(engine) as session:
        statement = select(product).where(
            product.product_type_id == product_type_id
        ).order_by(func.random())
        result = session.exec(statement)
        for product in result:
            if i != 6:
                image = _domain_images.ImageSQL
                statement_image = select(image).where(
                    and_(
                        image.product_id == product.product_id,
                        image.image_display == 1
                    )
                )
                image = session.exec(statement_image).one()
                propro = _domain_promotionals.ProProSQL
                statement = select(propro).where(
                    propro.product_id == product.product_id
                )
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
                rate = _domain_rates.RateSQL
                statement = select(rate).where(
                    rate.product_id == product.product_id)
                result = session.exec(statement)
                rate_list = []
                for rate in result:
                    rate_list.append(rate.rate_star_number)
                avg_rate = 0
                if rate_list:
                    avg_rate = sum(rate_list)/len(rate_list)
                avg_rate = round_off_rating(avg_rate)
                resposne = {
                    "ProductID": product.product_id,
                    "ProductName": product.product_name,
                    "ImageSource": image.image_source,
                    "ProductCost": product.product_cost,
                    "RateStarNumber": avg_rate,
                    "Promotional": result_promotional,
                    "ProductSold": product.product_sold,
                    "ProductTypeId": product.product_type_id
                }
                _ = final_response.append(resposne)
                i += 1
            else:
                break
    return final_response
