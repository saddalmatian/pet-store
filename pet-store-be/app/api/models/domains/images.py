from sqlmodel import Field, SQLModel


class Image(SQLModel, table=True):
    __tablename__ = "image"
    image_id: str = Field(primary_key=True)
    product_id: str = Field(foreign_key="product.product_id")
    service_id: str = Field(foreign_key="service.service_id")
    image_source: str
