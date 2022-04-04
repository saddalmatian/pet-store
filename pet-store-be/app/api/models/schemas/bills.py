from app.api.models.domains import bills as _domain_bill


class VnPayIn(_domain_bill.VNPAmount, _domain_bill.VNPOrderInfo):
    pass
