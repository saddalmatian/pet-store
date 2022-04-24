from fastapi import HTTPException
from app.api.models.domains import bills as _domain_bills
from app.utils.db_helper import engine
from sqlmodel import Session, select
import datetime


def update_bill_status(
    bill_id: str, employee_id: str,
    bill_status: str, pay_method: str = 0,
    vnp_Amount: str = 0, user_address: str = ''
):
    bill = _domain_bills.BillSQL
    date_1 = datetime.datetime.now()
    date_1_format = date_1.strftime('%Y-%m-%d')
    end_date = date_1 + datetime.timedelta(days=3)
    end_date_format = end_date.strftime('%Y-%m-%d')
    with Session(engine) as session:
        statement = select(bill).where(bill.bill_id == bill_id)
        try:
            result = session.exec(statement).one()
        except Exception:
            raise HTTPException(
                status_code=404, detail='Bill not found'
            )
        result.employee_id = employee_id
        result.bill_status = bill_status
        if user_address:
            result.user_address = user_address
        if not result.bill_delivery_date:
            result.bill_delivery_date = end_date_format
        if not result.bill_created_date:
            result.bill_created_date = date_1_format
        if bill_status != 'Đã giao':
            result.pay_method = pay_method
            result.bill_total = vnp_Amount
        result.updated_at = datetime.datetime.now()
        session.add(result)
        session.commit()
    return {"Message": "Sucessfully"}
