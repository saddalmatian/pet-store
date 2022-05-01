from fastapi import HTTPException
from app.api.models.domains import employees\
    as _domain_employee
from app.utils.db_helper import engine
from sqlmodel import Session, select
from app.utils.security import create_access_token


def sign_in_employee(
    username: str, password: str
):
    employee = _domain_employee.EmployeeSQL
    # try:
    with Session(engine) as session:
        statement = select(employee).where(
            employee.employee_username == username
        )
        results = session.exec(statement)
        try:
            employee_result = results.one()
        except Exception:
            raise HTTPException(400, detail="Username not found")
        cus_password = employee_result.employee_pwd
        if cus_password == password:
            payload = {
                "Username": username
            }
            token = create_access_token(payload)
            response = {
                "Username": username,
                "Token": token
            }
            return response
        raise HTTPException(400, detail="Password is not correct")
