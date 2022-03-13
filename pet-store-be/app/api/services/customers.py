from app.api.models.schemas import customers\
    as _schemas_customers
from app.db.customer.sign_up_customer import sign_up_customer
from app.utils.security import check_exist


def customer_sign_up(
    customer_in: _schemas_customers.CustomerSignUpIn
) -> dict:
    email = customer_in.email
    username = customer_in.username
    if check_exist(email) and check_exist(username):
        _ = sign_up_customer(**customer_in.dict())
    response = {
        "Message": "Successfully signed up"
    }
    return response
