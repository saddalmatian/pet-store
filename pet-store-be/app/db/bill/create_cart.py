from fastapi import HTTPException
from app.api.models.domains import bills as _domain_bills
from app.utils.db_helper import generate_ksuid, get_userid_from_username
from app.utils.db_helper import engine
from sqlmodel import Session, select
from operator import and_


def create_a_cart(username):
    bill_id = generate_ksuid()
    user_id = get_userid_from_username(username, True)
    cart = _domain_bills.BillSQL
    with Session(engine) as session:
        statement = select(cart).where(
            and_(
                cart.customer_id == user_id,
                cart.bill_status == 'Chưa xác nhận'
            )
        )
        result = session.exec(statement)
        if result.first():
            raise HTTPException(status_code=400, detail='Cart existed')
        bill = _domain_bills.BillSQL(
            bill_id=bill_id,
            customer_id=user_id,
            employee_id='admin_id',  # default is admin
            bill_created_date=None,
            bill_delivery_date=None,
            bill_status='Chưa xác nhận',
            bill_total=0,
            pay_method=None,
            user_address=''
        )
        response = {**bill.dict()}
        _ = session.add(bill)
        _ = session.commit()
    return response
