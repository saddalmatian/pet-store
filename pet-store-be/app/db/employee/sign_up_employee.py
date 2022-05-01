from fastapi import HTTPException
from app.api.models.domains import employees\
    as _domain_employee
from app.utils.db_helper import engine, generate_ksuid
from sqlmodel import Session


def sign_up_employee(
    full_name: str, email: str,
    phone: str, age: str,
    username: str, password: str
):
    employee_id = generate_ksuid()
    employee = _domain_employee.EmployeeSQL(
        employee_name=full_name,
        employee_email=email,
        employee_pwd=password,
        employee_phone=phone,
        employee_username=username,
        employee_age=age,
        employee_id=employee_id,
        is_admin=False
    )
    try:
        with Session(engine) as session:
            session.add(employee)
            session.commit()
    except Exception:
        raise HTTPException(400, detail="Invalid data input")
