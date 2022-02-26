from app.api.models.domains import pet_types\
    as _domain_pettypes


class PetTypeCreResp(
    _domain_pettypes.PetTypeID, _domain_pettypes.PetTypeName
):
    pass
