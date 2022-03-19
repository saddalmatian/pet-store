from datetime import date
from sqlmodel import Field, SQLModel


class BrandSQL(SQLModel, table=True):
    __tablename__ = "brand"
    brand_id: str = Field(primary_key=True)
    brand_name: str
