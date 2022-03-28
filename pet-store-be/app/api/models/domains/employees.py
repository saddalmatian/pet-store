from sqlmodel import Field, SQLModel
from pydantic import BaseModel


class EmployeeSQL(SQLModel, table=True):
    __tablename__ = "employee"
    employee_id: str = Field(primary_key=True)
    employee_name: str
    employee_phone: str
    employee_age: int
    employee_username: str
    employee_pwd: str
    employee_email: str
    is_admin: bool


class FullName(BaseModel):
    full_name: str = Field(alias='FullName')


class Email(BaseModel):
    email: str = Field(alias='Email')


class Phone(BaseModel):
    phone: str = Field(alias='Phone')


class Age(BaseModel):
    age: int = Field(alias='Age')


class Username(BaseModel):
    username: str = Field(alias='Username')


class Password(BaseModel):
    password: str = Field(alias='Password')


class Id(BaseModel):
    employee_id: str = Field(alias='EmployeeId')
