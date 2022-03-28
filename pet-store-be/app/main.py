from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.router import\
    (
        products, pet_types,
        images, customers,
        employees
    )
# db connection

app = FastAPI(
    prefix="/api",
)
app.include_router(products.router)
app.include_router(pet_types.router)
app.include_router(images.router)
app.include_router(customers.router)
app.include_router(employees.router)

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
