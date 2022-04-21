from app.api.models.schemas import employees\
    as _schemas_employees
from app.db.employee.sign_up_employee import sign_up_employee
from app.db.employee.sign_in_employee import sign_in_employee
from app.db.employee.get_employees import get_employees, get_employee_detail
from app.db.employee.update_employee_detail import update_employee_detail
from app.db.employee.del_employee import del_employee
from app.utils.security import check_exist, is_admin


def employee_sign_up(
    employee_in: _schemas_employees.EmployeeSignUpIn,
    username: str
) -> dict:
    _ = is_admin(username)
    email = employee_in.email
    username = employee_in.username
    if not check_exist(email) and\
            not check_exist(username):
        _ = sign_up_employee(**employee_in.dict())
        response = {
            "Message": "Successfully signed up"
        }
        return response


def employee_sign_in(
    username: str, password: str
) -> dict:
    response = sign_in_employee(username, password)
    return response


def get_all_employees(
    username: str
) -> dict:
    _ = is_admin(username)
    response = get_employees()
    return response


def get_employee(
    username: str
) -> dict:
    response = get_employee_detail(username)
    return response


def update_employee(
    employee_in: _schemas_employees.EmployeeUpIn,
    username: str,
) -> dict:
    _ = is_admin(username)
    response = update_employee_detail(employee_in)
    return response


def delete_employee(
    employee_username: str,
    username: str,
) -> dict:
    _ = is_admin(username)
    response = del_employee(employee_username)
    return response
