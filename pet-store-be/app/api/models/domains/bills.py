from datetime import date
from sqlmodel import Field, SQLModel


class BillSQL(SQLModel, table=True):
    __tablename__ = "bill"
    bill_id: str = Field(primary_key=True)
    customer_id: str = Field(foreign_key="customer.customer_id")
    employee_id: str = Field(foreign_key="employee.employee_id")
    bill_created_date: date
    bill_delivery_date: date
    bill_status: str
    bill_total: int
    pay_method: str


class BillDetailSQL(SQLModel, table=True):
    __tablename__ = "bill_detail"
    bill_id: str = Field(foreign_key="bill.bill_id")
    product_id: str = Field(foreign_key="product.product_id")
    service_id: str = Field(foreign_key="service.service_id")
    promotional_id: str = Field(foreign_key="promotional.promotional_id")
    product_quantity: int
    cost: int
