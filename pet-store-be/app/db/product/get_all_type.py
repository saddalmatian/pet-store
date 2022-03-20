from operator import and_
from app.api.models.domains import\
    (
        products as _domain_products,
        images as _domain_images,
        pet_types as _domain_pettypes
    )
from app.utils.db_helper import engine
from sqlmodel import Session, select


def get_all_type() -> list:
    pet_type = _domain_pettypes.PetTypeSQL
    product_type = _domain_products.ProductTypeSQL
    response = {}
    final_response = {}
    pet_type_dict = {}
    with Session(engine) as session:
        statement = select(pet_type)
        results = session.exec(statement)
        for pet_type in results:
            pet_type_dict.update(
                {
                    pet_type.pet_type_id: pet_type.pet_type_name
                }
            )
        statement = select(product_type)
        results = session.exec(statement)
        pet_name_value = pet_type_dict.values()
        for pet_name in pet_name_value:
            response[pet_name] = []
        for product_type in results:
            product_type_dict = {
                "ProductType": product_type.product_type,
                "ProductTypeID": product_type.product_type_id
            }
            pet_name = pet_type_dict[product_type.pet_type_id]
            response[pet_name].append(product_type_dict)
        final_response['Listype']=[response]
    return final_response
