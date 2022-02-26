from fastapi import APIRouter
from app.api.models.schemas import \
    pet_types as _schemas_pet_type
from app.api.services import pet_types \
    as _service_pet_type

router = APIRouter(
    prefix="/pet-type",
    tags=["PetType"]
)


@router.post(
    "/create-pet-type",
    response_model=_schemas_pet_type.PetTypeCreResp
)
async def create_pet_type(
    pet_type_name: str
):
    response = _service_pet_type.create_pet_type(pet_type_name)
    return response
