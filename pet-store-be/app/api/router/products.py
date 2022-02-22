from fastapi import APIRouter

router = APIRouter(
    prefix="/product",
    tags=["Product"]
)


# @router.post(
#     "/create-product",
#     response_model
#     )
# async def create_product(

# ):
#     return
