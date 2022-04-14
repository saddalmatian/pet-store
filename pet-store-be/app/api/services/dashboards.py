from app.db.dashboard.get_most_sale import get_most_sold, get_most_profit
from app.utils.security import is_employee_or_customer


def get_product_sold(
    username: str, order_by: str,
    product_type_id: str
):
    user = is_employee_or_customer(username)
    if user == 'employee':
        response = get_most_sold(order_by, product_type_id)
        return response


def get_product_profit(username: str, order_by: str):
    user = is_employee_or_customer(username)
    if user == 'employee':
        response = get_most_profit(order_by)
        return response
