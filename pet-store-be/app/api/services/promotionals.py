from app.api.models.schemas import \
    promotionals as _schemas_promtional
from app.utils.security import is_employee_or_customer
from app.db.promotional.create_promo import create_promo
from app.db.promotional.get_promo import get_promo


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
    response = get_promo()
    return response
