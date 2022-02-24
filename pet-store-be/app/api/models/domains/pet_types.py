from pydantic import BaseModel
from sqlmodel import Field, SQLModel


class PetTypeSQL(SQLModel, table=True):
    __tablename__ = "pet_type"
    pet_type_id: str = Field(primary_key=True)
    pet_type_name: str


class PetTypeID(BaseModel):
    pet_type_id: str = Field(alias="PetTypeID")
