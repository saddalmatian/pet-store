from app.api.models.domains import \
    (
        products, services,
        images
    )


class ImageCreIn():
    product_id: products.ProductID
    service_id: services.SerivceID
    image_source: images.ImageSource
