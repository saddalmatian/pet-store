from pydantic import BaseModel
from app.api.models.domains import \
    (
        products, images
    )


class ImageCreIn(BaseModel):
    product_id: products.ProductID
    image_source: images.ImageSource


class ImageListResp(images.ImageSource, images.ImageDisplay):
    pass
