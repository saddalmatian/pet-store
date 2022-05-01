from app.api.models.domains import employees\
    as _domain_employee


class EmployeeSignUpIn(
    _domain_employee.FullName, _domain_employee.Age,
    _domain_employee.Username, _domain_employee.Email,
    _domain_employee.Password, _domain_employee.Phone,
):
    pass


class GetAllEmployee(
    _domain_employee.Phone, _domain_employee.Age,
    _domain_employee.Id, _domain_employee.FullName,
    _domain_employee.Username, _domain_employee.Email,
    _domain_employee.Password
):
    pass


class GetEmployee(GetAllEmployee, _domain_employee.Password):
    pass


class EmployeeUpIn(
    _domain_employee.FullName, _domain_employee.Age,
    _domain_employee.Password, _domain_employee.Phone,
    _domain_employee.Id
):
    pass
