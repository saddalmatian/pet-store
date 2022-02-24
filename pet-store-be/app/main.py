from typing import Optional, List
from pydantic import BaseModel
from fastapi import FastAPI, status, HTTPException
from sqlalchemy import true

from app.api.router import(
    products
)
# db connection

app = FastAPI()
app.include_router(products.router)

