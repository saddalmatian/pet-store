from app.api.models.domains import (
    products as _product_domain,
    pet_types as _pettype_domain
)


class ProductCreIn(
    _product_domain.ProductName, _product_domain.ProductQuantity,
    _pettype_domain.PetTypeID
):
    pass


class ProductResp(
    ProductCreIn, _product_domain.ProductID,
    _product_domain.ProductSold
):
    pass
