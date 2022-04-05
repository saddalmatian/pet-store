from sqlmodel import Field, SQLModel
from pydantic import BaseModel


class ServiceSQL(SQLModel, table=True):
    __tablename__ = "service"
    service_id: str = Field(primary_key=True)
    service_type_id: str = Field(foreign_key="service_type.service_type_id")
    service_name: str
    service_cost: int
    service_detail: str


class ServiceTypeSQL(SQLModel, table=True):
    __tablename__ = "service_type"
    service_type_id: str = Field(primary_key=True)
    service_type_name: str


class ServicePetSQL(SQLModel, table=True):
    __tablename__ = "service_pet"
    pet_type_id: str = Field(
        foreign_key="pet_type.pet_type_id", primary_key=True
    )
    service_id: str = Field(
        foreign_key="service.service_id", primary_key=True
    )


class SerivceID(BaseModel):
    service_id: str = Field(default='', alias="ServiceID")


class ServiceName(BaseModel):
    service_name: str = Field(alias="ServiceName")


class ServiceCost(BaseModel):
    service_cost: str = Field(alias="ServiceCost")


class ServiceTypeName(BaseModel):
    service_type_name: str = Field(alias="ServiceTypeName")


class ServiceDetail(BaseModel):
    service_detail: str = Field(alias="ServiceDetail")
