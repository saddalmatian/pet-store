from pydantic import BaseModel
from sqlmodel import Field, SQLModel


class ImageSQL(SQLModel, table=True):
    __tablename__ = "image"
    image_id: str = Field(primary_key=True)
    product_id: str = Field(
        foreign_key='pet_type.pet_type_id', primary_key=True
    )
    image_source: str
    image_display: bool


class ImageID(BaseModel):
    image_id: str = Field(alias='ImageID')


class ImageSource(BaseModel):
    image_source: str = Field(alias='ImageSource')


class ImageDisplay(BaseModel):
    image_display: str = Field(alias='ImageDisplay')
