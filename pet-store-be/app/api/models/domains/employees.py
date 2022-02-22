from sqlmodel import Field, SQLModel


class Employee(SQLModel, table=True):
    __tablename__ = "employee"
    employee_id: str = Field(primary_key=True)
    employee_name: str
    employee_phone: str
    employee_age: int
    employee_username: str
    employee_pwd: str
