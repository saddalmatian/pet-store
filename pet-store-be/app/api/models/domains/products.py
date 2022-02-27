from pydantic import BaseModel
from sqlmodel import Field, SQLModel
from typing import Optional


class ProductSQL(SQLModel, table=True):
    __tablename__ = 'product'
    product_id: str = Field(primary_key=True)
    product_quantity: int
    product_name: str
    product_sold: int
    product_type_id: str = Field(
        foreign_key='product_type.product_type_id')


class ProductPetSQL(SQLModel, table=True):
    __tablename__ = 'product_pet'
    product_id: str = Field(foreign_key='product.product_id', primary_key=True)
    pet_type_id: str = Field(
        foreign_key='pet_type.pet_type_id', primary_key=True)


class ProductTypeSQL(SQLModel, table=True):
    __tablename__ = 'product_type'
    product_type_id: str = Field(primary_key=True)
    pet_type_id: str = Field(
        foreign_key='pet_type.pet_type_id')
    product_type: str


class ProductDetailSQL(SQLModel, table=True):
    __tablename__ = 'product_detail'
    product_detail_id: str = Field(primary_key=True)
    product_id: str = Field(foreign_key='product.product_id')
    product_description: str
    product_cost: int


class SizeSQL(SQLModel, table=True):
    __tablename__ = 'size'
    product_detail_id: str = Field(
        foreign_key='product_detail.product_detail_id'
    )
    product_size: str
    temp_column: str = Field(primary_key=True)


class ColorSQL(SQLModel, table=True):
    __tablename__ = 'color'
    product_detail_id: str = Field(
        foreign_key='product_detail.product_detail_id'
    )
    product_color: str
    temp_column: str = Field(primary_key=True)


class ProductColor(BaseModel):
    product_color: str = Field(alias='ProductColor')


class ProductSize(BaseModel):
    product_size: str = Field(alias='ProductSize')


class ProductID(BaseModel):
    product_id: str = Field(alias='ProductID')


class PetTypeID(BaseModel):
    pet_type_id: str = Field(alias='PetTypeID')


class ProductName(BaseModel):
    product_name: str = Field(alias='ProductName')


class ProductDetail(BaseModel):
    product_detail: str = Field(alias='ProductDetail')


class ProductCost(BaseModel):
    product_cost: int = Field(alias='ProductCost')


class ProductQuantity(BaseModel):
    product_quantity: int = Field(alias='ProductQuantity')


class ProductSold(BaseModel):
    product_sold: int = Field(default=0, alias='ProductSold')


class ProductType(BaseModel):
    product_type: str = Field(alias='ProductType')


class ProductTypeID(BaseModel):
    product_type_id: str = Field(alias='ProductTypeID')


class ProductTypeIDGetAll(BaseModel):
    product_type_id: Optional[str] = Field(default='', alias='ProductTypeID')


class ProductDescription(BaseModel):
    product_description: str = Field(alias='ProductDescription')
