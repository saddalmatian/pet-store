from app.utils.db_helper import get_userid_from_username
from app.db.rate.rate_product import rate_product


def rate_a_product(
    username: str, product_id: str,
    rate_star_number: int
):
    user = get_userid_from_username(username, is_customer=True)
    response = rate_product(
        user, product_id,
        rate_star_number
    )
    return response
