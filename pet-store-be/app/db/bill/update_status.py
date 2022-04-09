from app.api.models.domains import bills as _domain_bills
from app.utils.db_helper import engine
from sqlmodel import Session, select
import datetime


def update_bill_status(
    bill_id: str, employee_id: str,
    bill_status: str, pay_method: str,
    vnp_Amount: str
):
    bill = _domain_bills.BillSQL
    date_1 = datetime.datetime.now()
    date_1_format = date_1.strftime('%Y-%m-%d')
    end_date = date_1 + datetime.timedelta(days=3)
    end_date_format = end_date.strftime('%Y-%m-%d')
    with Session(engine) as session:
        statement = select(bill).where(bill.bill_id == bill_id)
        result = session.exec(statement).one()
        result.employee_id = employee_id
        result.bill_status = bill_status
        result.bill_delivery_date = end_date_format
        result.bill_created_date = date_1_format
        result.pay_method = pay_method
        result.bill_total = vnp_Amount/100
        result.updated_at = datetime.datetime.now()
        session.add(result)
        session.commit()
    return {"Message": "Sucessfully"}
