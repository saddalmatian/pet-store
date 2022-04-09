from operator import and_
from app.api.models.domains import\
    (
        products as _domain_products,
        images as _domain_images
    )
from app.utils.db_helper import engine
from sqlmodel import Session, asc, desc, select


def get_most_sold(
    order_by: str, product_type_id: str
):
    product = _domain_products.ProductSQL
    image = _domain_images.ImageSQL
    response = []
    with Session(engine) as session:
        order_statement = desc(product.product_sold)
        if order_by == 'asc':
            order_statement = asc(product.product_sold)
        statement = select(product)
        if product_type_id:
            statement = select(product).\
                where(product.product_type_id == product_type_id)
        final_statement = statement.order_by(order_statement)
        result = session.exec(final_statement)
        for item in result:
            product_id = item.product_id
            statement = select(image).where(
                and_(
                    image.product_id == product_id,
                    image.image_display == 1
                )
            )
            result_image = session.exec(statement).one()
            image_source = result_image.image_source
            product_name = item.product_name
            product_cost = item.product_cost
            product_sold = item.product_sold
            item_dict = {
                "ProductSold": product_sold,
                "ProductID": product_id,
                "ProductName": product_name,
                "ImageSource": image_source,
                "ProductCost": product_cost,
                "RateStarNumber": 0,
            }
            response.append(item_dict)
    return response


def get_most_profit(order_by: str):
    product = _domain_products.ProductSQL
    image = _domain_images.ImageSQL
    response = []
    with Session(engine) as session:
        statement = select(product)
        if order_by == 'asc':
            statement = select(product)
        result = session.exec(statement)
        for item in result:
            product_id = item.product_id
            statement = select(image).where(
                and_(
                    image.product_id == product_id,
                    image.image_display == 1
                )
            )
            result_image = session.exec(statement).one()
            image_source = result_image.image_source
            product_name = item.product_name
            product_cost = item.product_cost
            product_sold = item.product_sold
            product_ori_cost = item.product_original_cost
            profit = product_cost*product_sold-product_ori_cost*product_sold
            item_dict = {
                "ProductSold": product_sold,
                "ProductOriginalCost": product_ori_cost,
                "ProductID": product_id,
                "ProductName": product_name,
                "ImageSource": image_source,
                "ProductCost": product_cost,
                "RateStarNumber": 0,
                "Profit": profit
            }
            _ = response.append(item_dict)
        response = sorted(response, key=lambda x: x['Profit'], reverse=True)
        if order_by == 'asc':
            response = sorted(response, key=lambda x: x['Profit'])
    return response
