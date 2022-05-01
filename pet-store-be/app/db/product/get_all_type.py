from app.api.models.domains import\
    (
        products as _domain_products,
        pet_types as _domain_pettypes
    )
from app.utils.db_helper import engine
from sqlmodel import Session, select


def get_all_type() -> list:
    pet_type = _domain_pettypes.PetTypeSQL
    product_type = _domain_products.ProductTypeSQL
    final_response = []
    with Session(engine) as session:
        statement = select(pet_type)
        results = session.exec(statement)
        for pet_type in results:
            temp = {}
            temp.update({
                "PetTypeId": pet_type.pet_type_id,
                "PetTypeName": pet_type.pet_type_name
            })
            list_type = []
            statement1 = select(product_type)
            resutls1 = session.exec(statement1)
            for product in resutls1:
                if product.pet_type_id == pet_type.pet_type_id:
                    list_type.append({
                        "ProductType": product.product_type,
                        "ProductTypeID": product.product_type_id
                    })
                    temp.update(
                        {
                            "ListType": list_type
                        }
                    )
            final_response.append(temp)
    return final_response
