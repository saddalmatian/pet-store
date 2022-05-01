from app.utils.db_helper import engine
from sqlmodel import Session, select
from fastapi import HTTPException
from app.api.models.domains import promotionals as _promotional_domains


def delete_promotional(
    promotional_id: str
) -> dict:
    with Session(engine) as session:
        promotional = _promotional_domains.PromotionalSQL
        statement = select(promotional).where(
            promotional.promotional_id == promotional_id
        )
        try:
            result = session.exec(statement).first()
            _ = session.delete(result)
            _ = session.commit()
        except Exception:
            raise HTTPException(
                status_code=404, detail='Promotional not found'
            )
    response = {
        "Message": "Deleted promotional successfully"
    }
    return response
