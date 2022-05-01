from app.api.models.schemas import\
    pet_types as _schemas_pettype
from app.db.pet_type.create_new_pet_type import create_new_pet_type


def create_pet_type(
    pet_type_name: str
) -> _schemas_pettype.PetTypeCreResp:
    response = create_new_pet_type(
        pet_type_name
    )
    return response
