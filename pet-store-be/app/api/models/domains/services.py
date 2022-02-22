from sqlmodel import Field, SQLModel


class Service(SQLModel, table=True):
    __tablename__ = "service"
    service_id: str = Field(primary_key=True)
    service_type_id: str = Field(foreign_key="service_type.service_type_id")
    service_name: str
    service_cost: int
    service_detail: str


class ServiceType(SQLModel, table=True):
    __tablename__ = "service_type"
    service_type_id: str = Field(primary_key=True)
    service_type_name: str


class ServicePet(SQLModel, table=True):
    __tablename__ = "service_pet"
    pet_type_id: str = Field(
        foreign_key="pet_type.pet_type_id", primary_key=True
    )
    service_id: str = Field(
        foreign_key="service.service_id", primary_key=True
    )
