from typing import Optional, List
from pydantic import BaseModel
from fastapi import FastAPI, status, HTTPException
from sqlalchemy import true
from sqlmodel import Field, Session, SQLModel, create_engine, select
from api.models.domains.services import Service, ServiceType

# db connection
YOUR_DATABASE_USERNAME = 'root'
YOUR_DATABASE_PASSWORD = '123456789'
YOUR_DATABASE_NAME = 'pet_store'
engine = create_engine(
    f"mysql+pymysql://{YOUR_DATABASE_USERNAME}:{YOUR_DATABASE_PASSWORD}@localhost:3306/{YOUR_DATABASE_NAME}",
    echo=True
)

SQLModel.metadata.create_all(engine)


# def create_image():
#     service_type = ServiceType(
#         service_type_id="asd",
#         service_type_name="testname"
#     )
#     service = Service(
#         service_id="test",
#         service_type_id="asd",
#         service_name="awe",
#         service_cost=123,
#         service_detail="qweqwe"
#     )
#     session = Session(engine)
#     session.add(service_type)
#     session.commit()
#     session.add(service)
#     session.commit()


# create_image()
