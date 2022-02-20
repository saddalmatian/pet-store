from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from typing import Optional
from sqlmodel import Field, SQLModel, create_engine

USER = "gianghoatran"
PASSWORD = "371881214aA"
DATABASE = "pet_store"
SERVER = "localhost"
PORT = "3306"

SQLALCHEMY_DATABASE_URL = "mysql://"+USER + ":"+PASSWORD+"@localhost"
engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)
conn = engine.connect()


class Image(SQLModel, table=True):
    image_id: Optional[str] = Field(
        default=None, primary_key=True, max_length=20)
    product_id: str
    service_id: str
    image_source: str


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


if __name__ == "__main__":
    create_db_and_tables()
