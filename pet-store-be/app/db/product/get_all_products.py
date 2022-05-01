from operator import or_
from app.api.models.domains import\
    (
        products as _domain_products,
        images as _domain_images,
        promotionals as _domain_promotionals,
        rates as _domain_rates
    )
from app.utils.db_helper import engine
from sqlmodel import Session, select, asc, desc
from functools import reduce


def chain_2(type_id: str):
    product = _domain_products.ProductSQL
    return product.product_type_id == type_id


def chain_or(a, b):
    return or_(a, b)


def check_search(a: str, b: str):
    a = a.lower()
    b = b.lower()
    if a.find(b) >= 0:
        return True
    return False


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


def get_all_products_in_db(
    product_type_id: str,
    pet_type_id: str,
    most_sold: str,
    order_by: str,
    search_text: str
) -> dict:
    with Session(engine) as session:
        product = _domain_products.ProductSQL
        product_type = _domain_products.ProductTypeSQL
        statement_filter = ''
        temp_list = []
        if pet_type_id:
            statement_test = select(product_type).where(
                product_type.pet_type_id == pet_type_id
            )
            result_test = session.exec(statement_test)
            list_product_type_id = []
            for pet_type in result_test:
                list_product_type_id.append(pet_type.product_type_id)
            list_type_id = list(map(chain_2, list_product_type_id))
            statement_filter = reduce(chain_or, list_type_id)
        if product_type_id:
            statement_filter = product.product_type_id == product_type_id
        response = []
        if not pet_type_id and not product_type_id:
            statement = select(product)
        else:
            statement = select(product).where(statement_filter)
        order_statement = desc(product.product_cost)
        if order_by == 'asc':
            order_statement = asc(product.product_cost)
        statement = statement.order_by(order_statement)

        results = session.exec(statement)
        for item in results:
            image = _domain_images.ImageSQL
            product_name = item.product_name
            product_id = item.product_id
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
            statement_img = select(image).where(image.product_id == product_id)
            result_img = session.exec(statement_img)
            image_source = ''
            for detect_img in result_img:
                if detect_img.image_display:
                    image_source = detect_img.image_source
            product_cost = item.product_cost
            product_sold = item.product_sold
            rate = _domain_rates.RateSQL
            statement = select(rate).where(rate.product_id == product_id)
            result = session.exec(statement)
            rate_list = []
            for rate in result:
                rate_list.append(rate.rate_star_number)
            avg_rate = 0
            if rate_list:
                avg_rate = sum(rate_list)/len(rate_list)
            avg_rate = round_off_rating(avg_rate)
            item_dict = {
                "ProductID": product_id,
                "ProductName": product_name,
                "ImageSource": image_source,
                "ProductCost": product_cost,
                "RateStarNumber": avg_rate,
                "Promotional": result_promotional,
                "ProductSold": product_sold
            }
            if item_dict.get('ProductName') not in temp_list:
                _ = temp_list.append(product_name)
                response.append(item_dict)
        if most_sold:
            response = sorted(
                response, key=lambda d: d['ProductSold'], reverse=True
            )
        if search_text:
            response = list(map(lambda x: x if check_search(
                x['ProductName'], search_text) else None, response)
            )
        final_response = []
        for i in response:
            if i is not None:
                final_response.append(i)
    return final_response
