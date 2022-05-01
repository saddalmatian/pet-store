from app.api.models.domains import\
    (
        employees as _domain_employees,
    )
from app.utils.db_helper import engine
from sqlmodel import Session, select


def get_employees() -> dict:
    response = []
    employee = _domain_employees.EmployeeSQL
    with Session(engine) as session:
        statement = select(employee).where(
            employee.is_admin != 1
        )
        results = session.exec(statement)
        for employee in results:
            item_dict = {
                "EmployeeId": employee.employee_id,
                "Username": employee.employee_username,
                "FullName": employee.employee_name,
                "Email": employee.employee_email,
                "Phone": employee.employee_phone,
                "Age": employee.employee_age,
                "Password": employee.employee_pwd
            }
            response.append(item_dict)
    return response


def get_employee_detail(username: str) -> dict:
    employee = _domain_employees.EmployeeSQL
    with Session(engine) as session:
        statement = select(employee).where(
            employee.employee_username == username
        )
        results = session.exec(statement)
        employee = results.one()
        item_dict = {
            "EmployeeId": employee.employee_id,
            "Username": employee.employee_username,
            "FullName": employee.employee_name,
            "Email": employee.employee_email,
            "Phone": employee.employee_phone,
            "Age": employee.employee_age,
            "Password": employee.employee_pwd
        }
        return item_dict
