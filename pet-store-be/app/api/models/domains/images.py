from pydantic import BaseModel
from sqlmodel import Field, SQLModel


class ImageSQL(SQLModel, table=True):
    __tablename__ = "image"
    image_id: str = Field(primary_key=True)
    product_id: str
    service_id: str
    image_source: str
    image_display: bool


class ImageID(BaseModel):
    image_id: str = Field(alias='ImageID')


class ImageSource(BaseModel):
    image_source: str = Field(alias='ImageSource')


class ImageDisplay(BaseModel):
    image_display: str = Field(alias='ImageDisplay')