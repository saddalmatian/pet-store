from app.utils import db_helper
from app.utils.db_helper import engine
from sqlmodel import Session
from fastapi import HTTPException
from app.api.models.domains import pet_types as _domain_pet_type


def create_new_pet_type(
    pet_type_name: str
) -> dict:
    pet_type_id = db_helper.generate_ksuid()
    pet_type = _domain_pet_type.PetTypeSQL(
        pet_type_id=pet_type_id,
        pet_type_name=pet_type_name,
    )
    try:
        with Session(engine) as session:
            session.add(pet_type)
            session.commit()
    except Exception:
        raise HTTPException(
            400, 'The pet type name is already in the database'
        )
    response = {
        'PetTypeName': pet_type_id,
        'PetTypeID': pet_type_name,
    }
    return response
