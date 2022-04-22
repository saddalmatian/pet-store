from app.api.models.domains import \
    (
        employees as _domain_employees,
    )
from app.utils.db_helper import engine
from sqlmodel import Session, select
from fastapi import HTTPException
from app.api.models.schemas import employees as _schemas_employee


def update_employee_detail(
    employee_in: _schemas_employee.EmployeeUpIn,
) -> dict:
    employee = _domain_employees.EmployeeSQL
    employee_fullname = employee_in.full_name
    employee_password = employee_in.password
    employee_phone = employee_in.phone
    employee_age = employee_in.age
    employee_id = employee_in.employee_id
    with Session(engine) as session:
        statement = select(employee).where(
            employee.employee_id == employee_id
        )
        # Update employee sql
        results = session.exec(statement)
        try:
            employee_result = results.one()
        except Exception:
            raise HTTPException(
                400, 'Employee not found'
            )
        employee_result.employee_name = employee_fullname
        employee_result.employee_pwd = employee_password
        employee_result.employee_phone = employee_phone
        employee_result.employee_age = employee_age
        session.add(employee_result)
        session.commit()
        session.refresh(employee_result)
        employee_response = employee_result.dict()
        response = {
            "FullName": employee_response.get('employee_name'),
            "Password": employee_response.get('employee_pwd'),
            "Phone": employee_response.get('employee_phone'),
            "Age": employee_response.get('employee_age'),
            "EmployeeId": employee_response.get('employee_id'),
            "Email": employee_response.get('employee_email'),
            "Username": employee_response.get('employee_username')
        }
    return response
