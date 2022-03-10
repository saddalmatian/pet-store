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
