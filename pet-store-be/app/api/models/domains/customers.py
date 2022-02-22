from sqlmodel import Field, SQLModel


class Customer(SQLModel, table=True):
    __tablename__ = "customer"
    customer_id: str = Field(primary_key=True)
    customer_name: str
    customer_mail: str
    customer_username: str
    customer_pwd: str


class Address(SQLModel, table=True):
    __tablename__ = "address"
    address_id: str = Field(primary_key=True)
    customer_id: str = Field(foreign_key="customer.customer_id")
    adress_detail: str
