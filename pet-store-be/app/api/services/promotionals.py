from app.api.models.schemas import \
    promotionals as _schemas_promtional
from app.utils.security import is_employee_or_customer
from app.db.promotional.create_promo import create_promo
from app.db.promotional.get_promo import get_promo, get_all_promo
from app.db.promotional.update_promotional import update_promotional
from app.db.promotional.delete_promotional import delete_promotional


def create_promotional(
    username: str, promotional_in: _schemas_promtional.PromotionalIn
):
    user = is_employee_or_customer(username)
    if user == 'employee':
        response = create_promo(promotional_in)
        return response


def get_promotional(
    promotional_id: str
):
    response = get_promo(promotional_id)
    return response


def get_all_promotional():
    response = get_all_promo()
    return response


def update_promo(
    username: str, promotional_in: _schemas_promtional.PromotionalInUp
):
    user = is_employee_or_customer(username)
    if user == 'employee':
        response = update_promotional(promotional_in)
        return response


def delete_promo(
    username: str, promotional_id: str
):
    user = is_employee_or_customer(username)
    if user == 'employee':
        response = delete_promotional(promotional_id)
        return response
