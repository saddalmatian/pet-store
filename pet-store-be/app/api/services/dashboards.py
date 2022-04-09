from app.db.dashboard.get_most_sale import get_most_sold, get_most_profit
from app.utils.security import is_admin


def get_product_sold(
    username: str, order_by: str,
    product_type_id: str
):
    _ = is_admin(username)
    response = get_most_sold(order_by, product_type_id)
    return response


def get_product_profit(username: str, order_by: str):
    _ = is_admin(username)
    response = get_most_profit(order_by)
    return response
