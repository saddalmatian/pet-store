from datetime import datetime
from typing import Optional
from ksuid import Ksuid
from sqlmodel import SQLModel, create_engine
from app.api.models.domains import (
    customers as _domain_customers,
    employees as _domain_employees
)
from fastapi import HTTPException
from sqlmodel import Session, select

import warnings
warnings.filterwarnings(
    "ignore",
    ".*Class SelectOfScalar will not make use of SQL compilation caching.*",
)
warnings.filterwarnings(
    "ignore",
    ".*Class Select will not make use of SQL compilation caching.*",
)

DATABASE_USERNAME = 'root'
DATABASE_PASSWORD = 'petstore#123A'
DATABASE_NAME = 'pet_store'

engine = create_engine(
    f"mysql+pymysql://{DATABASE_USERNAME}:{DATABASE_PASSWORD}@localhost:3306\
        /{DATABASE_NAME}",
    # echo=True
)
SQLModel.metadata.create_all(engine)


def generate_ksuid(date: Optional[datetime] = None) -> str:
    """A ksuid is a K sorted UID.
    In other words, a KSUID also stores a date component.
    """
    if date is None:
        date = datetime.now()
    kid = str(Ksuid(date))[0:19]
    return kid


def get_date_now() -> str:
    date = datetime.now()
    result_date = date.strftime('%Y-%m-%d/')
    return result_date


def get_userid_from_username(username: str, is_customer: bool = False):
    cus_emp = _domain_employees.EmployeeSQL
    statment = select(cus_emp).where(
        cus_emp.employee_username == username
    )
    if is_customer:
        cus_emp = _domain_customers.CustomerSQL
        statment = select(cus_emp).where(
            cus_emp.customer_username == username
        )
    with Session(engine) as session:
        try:
            result = session.exec(statment).one()
            if is_customer:
                customer_id = result.customer_id
                return customer_id
            employee_id = result.employee_id
            return employee_id
        except Exception:
            raise HTTPException(
                404, 'Can not found this username'
            )
