from typing import Optional, List
from pydantic import BaseModel
from fastapi import FastAPI, status, HTTPException
from sqlalchemy import true
from sqlmodel import Field, Session, SQLModel, create_engine, select

# db connection
YOUR_DATABASE_USERNAME = 'root'
YOUR_DATABASE_PASSWORD = '123456789'
YOUR_DATABASE_NAME = 'pet_store'
engine = create_engine(
    f"mysql+pymysql://{YOUR_DATABASE_USERNAME}:{YOUR_DATABASE_PASSWORD}@localhost:3306/{YOUR_DATABASE_NAME}",
    echo=True
)

SQLModel.metadata.create_all(engine)

class Image(SQLModel, table=True):
    image_id: str = Field(primary_key=True)
    product_id: str = Field()
    service_id: str = Field()
    image_source: str = Field()    

# Base = declarative_base()

def create_image():
    image_1 = Image(
        image_id="TestImage",
        product_id="TestPI",
        service_id="TestSV",
        image_source="TestIS"
    )
    session = Session(engine)
    session.add(image_1)
    session.commit()

create_image()
# API


# app = FastAPI()


# class Image(Base):
#     __tablename__ = 'image'
#     image_id = Column(String(20), primary_key=True)
#     product_id = Column(String(20), nullable=False)
#     service_id = Column(String(20), nullable=False)
#     image_source = Column(String(100), nullable=False)