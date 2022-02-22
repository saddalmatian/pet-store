from sqlmodel import Field, SQLModel


class Product(SQLModel, table=True):
    __tablename__ = "product"
    product_id: str = Field(primary_key=True)
    pet_type_id: str = Field(foreign_key="product_pet.pet_type_id")
    product_name: str
    product_detail: str
    product_cost: str


class ProductPet(SQLModel, table=True):
    __tablename__ = "product_pet"
    product_id: str = Field(foreign_key="product.product_id", primary_key=True)
    pet_type_id: str = Field(foreign_key="pet_type.pet_type_id", primary_key=True)


class ProductType(SQLModel, table=True):
    __tablename__ = "product_type"
    product_type_id: str = Field(primary_key=True)
    product_id: str = Field(foreign_key="product.product_id")
    product_type: str


class ProductDetail(SQLModel, table=True):
    __tablename__ = "product_detail"
    product_detail_id: str = Field(primary_key=True)
    product_id: str = Field(foreign_key="product.product_id")
    product_Description: str
    product_cost: int


class Size(SQLModel, table=True):
    __tablename__ = "size"
    product_detail_id: str = Field(
        foreign_key="product_detail.product_detail_id"
    )
    product_size: str


class Color(SQLModel, table=True):
    __tablename__ = "color"
    product_detail_id: str = Field(
        foreign_key="product_detail.product_detail_id"
    )
    product_color: str
