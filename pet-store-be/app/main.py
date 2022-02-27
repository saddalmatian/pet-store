from fastapi import FastAPI

from app.api.router import\
    (
        products, pet_types,
        images
    )
# db connection

app = FastAPI(
    prefix="/api",
)
app.include_router(products.router)
app.include_router(pet_types.router)
app.include_router(images.router)