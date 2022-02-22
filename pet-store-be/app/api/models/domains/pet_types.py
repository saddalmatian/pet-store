from sqlmodel import Field, SQLModel


class PetType(SQLModel, table=True):
    __tablename__ = "pet_type"
    pet_type_id: str = Field(primary_key=True)
    pet_type_name: str
