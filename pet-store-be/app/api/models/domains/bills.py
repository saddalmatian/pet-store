from datetime import date
from pydantic import BaseModel
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
    updated_at: date
    pay_method: str


class BillDetailSQL(SQLModel, table=True):
    __tablename__ = "bill_detail"
    bill_detail_id: str = Field(primary_key=True)
    bill_id: str = Field(foreign_key="bill.bill_id")
    product_id: str
    promotional_id: str
    product_quantity: int
    cost: int


class VNPAmount(BaseModel):
    vnp_amount: int = Field(..., alias='VNPAmount')


class VNPOrderInfo(BaseModel):
    vnp_orderinfo: int = Field(..., alias='VNPOrderInfo')


class BillID(BaseModel):
    bill_id: str = Field(..., alias='BillID')
