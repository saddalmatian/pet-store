from pydantic import BaseModel
from sqlmodel import Field, SQLModel


class RateSQL(SQLModel, table=True):
    __tablename__ = "rate"
    rate_id: str = Field(primary_key=True)
    product_id: str = Field(foreign_key="product.product_id")
    customer_id: str = Field(foreign_key="customer.customer_id")
    rate_star_number: int


class RateStarNumber(BaseModel):
    rate_star_number: int = Field(alias='RateStarNumber')
