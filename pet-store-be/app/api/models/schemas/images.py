from pydantic import BaseModel
from app.api.models.domains import \
    (
        products, services,
        images
    )


class ImageCreIn(BaseModel):
    product_id: products.ProductID
    service_id: services.SerivceID
    image_source: images.ImageSource


class ImageListResp(images.ImageSource, images.ImageDisplay):
    pass
