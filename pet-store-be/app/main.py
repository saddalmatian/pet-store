from fastapi import FastAPI
from .api.routers import product

app = FastAPI()

app.include_router(
    product.router
)


@app.get("/")
def get_index():
    return "This is index"
