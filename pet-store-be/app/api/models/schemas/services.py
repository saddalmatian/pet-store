from app.api.models.domains import services as _service_domain


class ServiceCreIn(
    _service_domain.ServiceName, _service_domain.ServiceDetail,
    _service_domain.ServiceCost, _service_domain.ServiceTypeName
):
    pass
