from fastapi import APIRouter, Form, Header
from typing import List
from app.api.services import employees \
    as _service_employees
from app.api.models.schemas import employees\
    as _schemas_employees
from app.utils.security import get_username_from_token

router = APIRouter(
    prefix="/employees",
    tags=["Employee"]
)


@router.post("/sign-up")
async def employee_sign_up(
    customer_info_in: _schemas_employees.EmployeeSignUpIn,
    authorization_token: str = Header(None),
) -> dict:
    username = get_username_from_token(authorization_token)
    response = _service_employees.employee_sign_up(customer_info_in, username)
    return response


@router.post("/sign-in")
async def employee_sign_in(
    username: str = Form(...),
    password: str = Form(...)
) -> dict:
    response = _service_employees.employee_sign_in(username, password)
    return response


@router.get(
    "/get-all-employees",
    response_model=List[_schemas_employees.GetAllEmployee]
)
async def get_all_employees(
    authorization_token: str = Header(None)
) -> dict:
    username = get_username_from_token(authorization_token)
    response = _service_employees.get_all_employees(username)
    return response


@router.get(
    "/get-employee",
    response_model=_schemas_employees.GetEmployee
)
async def get_employee(
    authorization_token: str = Header(None)
) -> dict:
    username = get_username_from_token(authorization_token)
    response = _service_employees.get_employee(username)
    return response


@router.put(
    "/update-employee",
    response_model=_schemas_employees.GetEmployee
)
async def update_employee(
    employee_in: _schemas_employees.EmployeeUpIn,
    authorization_token: str = Header(None),
) -> dict:
    username = get_username_from_token(authorization_token)
    response = _service_employees.update_employee(employee_in, username)
    return response


@router.delete(
    "/delete-employee"
)
async def delete_employee(
    employee_username: str,
    authorization_token: str = Header(None)
) -> dict:
    username = get_username_from_token(authorization_token)
    response = _service_employees.delete_employee(employee_username, username)
    return response
