from app.api.models.domains import bills as _domain_bill
from app.api.models.domains import products as _domain_product
from app.api.models.domains import promotionals as _domain_promotional


class VnPayIn(_domain_bill.VNPAmount, _domain_bill.VNPOrderInfo):
    pass


class BillDetailIn(
    _domain_bill.BillID, _domain_product.ProductID,
    _domain_product.ProductQuantity,
    _domain_promotional.PromotionalID, _domain_product.ProductCost
):
    pass
