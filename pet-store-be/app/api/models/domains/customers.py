from pydantic import BaseModel
from sqlmodel import Field, SQLModel
from typing import Optional


class CustomerSQL(SQLModel, table=True):
    __tablename__ = "customer"
    customer_id: str = Field(primary_key=True)
    customer_name: str
    customer_mail: str
    customer_username: str
    customer_pwd: str
    address_detail: Optional[str]
    customer_phone: str


class FullName(BaseModel):
    full_name: str = Field(alias='FullName')


class Email(BaseModel):
    email: str = Field(alias='Email')


class Phone(BaseModel):
    phone: str = Field(alias='Phone')


class Address(BaseModel):
    address: str = Field(alias='Address')


class Username(BaseModel):
    username: str = Field(alias='Username')


class Password(BaseModel):
    password: str = Field(alias='Password')


class CustomerID(BaseModel):
    customer_id: str = Field(alias='CustomerID')
