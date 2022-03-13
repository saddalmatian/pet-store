from app.api.models.domains import customers\
    as _domain_customer


class CustomerSignUpIn(
    _domain_customer.FullName, _domain_customer.Address,
    _domain_customer.Username, _domain_customer.Email,
    _domain_customer.Password, _domain_customer.Phone,
):
    pass
