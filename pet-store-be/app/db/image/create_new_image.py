from app.api.models.schemas import \
    images as _schemas_image
from app.utils import db_helper
from app.api.models.domains import images\
    as _domain_images
from app.utils.db_helper import engine
from sqlmodel import Session


def create_new_image(
    image_in: _schemas_image.ImageCreIn
) -> dict:
    image_id = db_helper.generate_ksuid()
    image_source = image_in.image_source
    product_id = image_in.product_id
    service_id = image_in.service_id
    image = _domain_images.ImageSQL(
        image_id=image_id,
        image_source=image_source,
        product_id=product_id,
        service_id=service_id,
    )
    with Session(engine) as session:
        session.add(image)
        response = session.commit()
    return response
