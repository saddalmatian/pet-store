from datetime import datetime
from sqlmodel import Field, SQLModel
from pydantic import BaseModel


class BookingSQL(SQLModel, table=True):
    __tablename__ = "booking"
    book_id: str = Field(primary_key=True, alias='BookId')
    customer_id: str = Field(
        foreign_key="customer.customer_id", alias="CustomerId"
    )
    customer_name: str = Field(alias='FullName')
    customer_phone: str = Field(alias='Phone')
    customer_email: str = Field(alias='Email')
    pet_amount: int = Field(alias='PetAmount')
    note: str = Field(alias='Note')
    book_time: datetime = Field(alias='BookTime')
    book_status: str = Field(alias='BookStatus')
    total: int = Field(alias='Total')


class BookId(BaseModel):
    book_id: str = Field(alias='BookId')


class PetAmount(BaseModel):
    pet_amount: int = Field(alias='PetAmount')


class Note(BaseModel):
    note: str = Field(alias='Note')


class BookTime(BaseModel):
    book_time: datetime = Field(alias='BookTime')


class BookStatus(BaseModel):
    book_status: str = Field(alias='BookStatus')


class Total(BaseModel):
    total: int = Field(alias='Total')
