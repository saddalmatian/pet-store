from datetime import date
from sqlmodel import Field, SQLModel


class PromotionalSQL(SQLModel, table=True):
    __tablename__ = "promotional"
    promotional_id: str = Field(primary_key=True)
    product_id: str = Field(foreign_key="product.product_id")
    service_id: str = Field(foreign_key="service.service_id")
    promotional_name: str
    promotional_description: str
    promotional_sale: int
    promotional_start_date: date
    promotional_end_date: date
