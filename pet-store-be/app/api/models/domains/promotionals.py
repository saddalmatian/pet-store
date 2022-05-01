from datetime import date
from pydantic import BaseModel
from sqlmodel import Field, SQLModel


class PromotionalSQL(SQLModel, table=True):
    __tablename__ = "promotional"
    promotional_id: str = Field(primary_key=True)
    promotional_name: str
    promotional_description: str
    promotional_sale: int
    promotional_start_date: date
    promotional_end_date: date


class ProProSQL(SQLModel, table=True):
    __tablename__ = "pro_pro"
    propro_id: str = Field(primary_key=True)
    promotional_id: str = Field(foreign_key='promotional.promotional_id')
    product_id: str = Field(foreign_key='product.product_id')


class PromotionalID(BaseModel):
    promotional_id: str = Field(alias='PromotionalID')


class PromotionalName(BaseModel):
    promotional_name: str = Field(..., alias='PromotionalName')


class PromotionalDesc(BaseModel):
    promotional_description: str = Field(..., alias='PromotionalDesc')


class PromotionalSale(BaseModel):
    promotional_sale: int = Field(..., alias='PromotionalSale')


class PromotionalEndDate(BaseModel):
    promotional_end_date: date = Field(..., alias='PromotionalEndDate')


class PromotionalStartDate(BaseModel):
    promotional_start_date: date = Field(..., alias='PromotionalStartDate')
