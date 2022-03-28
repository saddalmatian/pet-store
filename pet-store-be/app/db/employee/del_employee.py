from app.utils.db_helper import engine
from sqlmodel import Session, select
from fastapi import HTTPException
from app.api.models.domains import employees as _domain_employee


def del_employee(
    employee_username: str
) -> dict:
    employee = _domain_employee.EmployeeSQL
    try:
        with Session(engine) as session:
            statement = select(employee).where(
                employee.employee_username == employee_username
            )
            results = session.exec(statement)
            employee = results.one()
            session.delete(employee)
            session.commit()
    except Exception:
        raise HTTPException(
            400, 'This employee\'s username is not existed !'
        )
    response = {
        "Message": "Remove employee successfully"
    }
    return response
