from pydantic import BaseModel


from app.api.models.domains import(
    products as _product_domain,
    customers as _customer_domain,
    rates as _rate_domain
)


class RateIn(
    _product_domain.ProductID, _rate_domain.RateStarNumber
):
    pass
