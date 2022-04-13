from app.api.models.domains import products as _domain_products
from app.utils.db_helper import engine
from sqlmodel import Session, select, func


def get_random_products(product_type_id: str):
    product = _domain_products.ProductSQL
    response = []
    i = 0
    with Session(engine) as session:
        statement = select(product).where(
            product.product_type_id == product_type_id
        ).order_by(func.random())
        result = session.exec(statement)
        for product in result:
            if i != 5:
                _ = response.append(product.dict())
                i += 1
            else:
                break
    return response
