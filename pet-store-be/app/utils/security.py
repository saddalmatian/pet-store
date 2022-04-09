import jwt
from fastapi.security import OAuth2PasswordBearer
from fastapi import HTTPException
from typing import Optional
from operator import or_
from app.api.models.domains import customers, employees
from datetime import datetime, timedelta
from app.utils.db_helper import engine
from sqlmodel import Session, select
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def decode_jwt_token(token: str) -> dict:
    try:
        return jwt.decode(
            token.replace("Bearer ", ""),
            options={"verify_signature": False}
        )
    except Exception:
        raise HTTPException(
            status_code=400, detail="Token is invalid")


def get_username_from_token(token: str) -> str:
    payload = decode_jwt_token(token)
    username = payload.get("Username")
    if username:
        return username
    raise HTTPException(
        status_code=400, detail="Token is invalid")


def check_exist(user_or_email: str):
    object_select = employees.EmployeeSQL
    statement = select(object_select).where(
        or_(
            object_select.employee_username == user_or_email,
            object_select.employee_email == user_or_email
        )
    )
    with Session(engine) as session:
        statement = statement
        results = session.exec(statement)
        if results.first():
            raise HTTPException(
                status_code=400, detail="Username or email existed!")
        object_select = customers.CustomerSQL
        statement = select(object_select).where(
            or_(
                object_select.customer_username == user_or_email,
                object_select.customer_mail == user_or_email
            )
        )
        results = session.exec(statement)
        if results.first():
            raise HTTPException(
                status_code=400, detail="Username or email existed!")
        return False


def is_employee_or_customer(username: str):
    object_select = employees.EmployeeSQL
    statement = select(object_select).where(
        object_select.employee_username == username
    )
    with Session(engine) as session:
        statement = statement
        results = session.exec(statement)
        if results.first():
            return 'employee'
        object_select = customers.CustomerSQL
        statement = select(object_select).where(
            object_select.customer_username == username
        )
        results = session.exec(statement)
        if results.first():
            return 'customer'
        raise HTTPException(status_code=400, detail="Account not found")


def is_admin(username: str):
    employee = employees.EmployeeSQL
    statement = select(employee).where(
        employee.employee_username == username
    )
    with Session(engine) as session:
        statement = statement
        results = session.exec(statement)
        try:
            result = results.one()
        except Exception:
            raise HTTPException(status_code=400, detail='Username not found')
        is_admin = result.is_admin
        if not is_admin:
            raise HTTPException(
                status_code=403, detail="You are not an admin"
            )