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
    f"mysql+pymysql://{YOUR_DATABASE_USERNAME}:{YOUR_DATABASE_PASSWORD}\
        @localhost:3306/{YOUR_DATABASE_NAME}",
    echo=True
)

# create_image(
app = FastAPI()
