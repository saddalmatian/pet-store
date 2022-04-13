from fastapi import HTTPException
from app.api.models.domains import (
    bills as _domain_bills,
    customers as _domain_customers,
    employees as _domain_employees
)
from app.utils.db_helper import engine, get_userid_from_username
from sqlmodel import Session, select
from operator import and_


def get_all_cart_admin():
    cart = _domain_bills.BillSQL
    customer = _domain_customers.CustomerSQL
    employee = _domain_employees.EmployeeSQL
    response = []
    with Session(engine) as session:
        statement = select(cart)
        try:
            result = session.exec(statement)
            for cart in result:
                employee_id = cart.employee_id
                customer_id = cart.customer_id
                statement = select(customer).where(
                    customer.customer_id == customer_id
                )
                result = session.exec(statement).first()
                customer_name = result.customer_name
                statement = select(employee).where(
                    employee.employee_id == employee_id
                )
                result = session.exec(statement).first()
                employee_name = result.employee_name
                response_result = {
                    **cart.dict(),
                    "CustomerName": customer_name,
                    "EmployeeName": employee_name
                }
                response.append(response_result)
            return response
        except Exception:
            raise HTTPException(
                status_code=404, detail="There is no cart created yet !"
            )
        return response
