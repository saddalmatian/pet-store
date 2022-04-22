from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.router import\
    (
        bookings, products, pet_types,
        images, customers,
        employees, bills, comments,
        promotionals, dashboards,
        rates
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
app.include_router(bookings.router)
app.include_router(bills.router)
app.include_router(comments.router)
app.include_router(promotionals.router)
app.include_router(dashboards.router)
app.include_router(rates.router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
