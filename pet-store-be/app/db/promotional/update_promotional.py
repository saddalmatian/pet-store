from app.utils.db_helper import engine, generate_ksuid
from sqlmodel import Session, select
from fastapi import HTTPException
from app.api.models.domains import promotionals as _promotional_domains
from app.api.models.schemas import promotionals as _schemas_promtional


def update_promotional(
    promotional_in: _schemas_promtional.PromotionalInUp
) -> dict:
    pro_id = promotional_in.promotional_id
    start_date = promotional_in.promotional_start_date
    end_date = promotional_in.promotional_end_date
    if end_date < start_date:
        raise HTTPException(
            status_code=400, detail='Start date can not greater than end date'
        )
    with Session(engine) as session:
        promotional = _promotional_domains.PromotionalSQL
        statement = select(promotional).where(
            promotional.promotional_id == pro_id
        )
        try:
            result = session.exec(statement).one()
        except Exception:
            raise HTTPException(
                status_code=404, detail='Promotional not found'
            )
        result.promotional_name = promotional_in.promotional_name
        result.promotional_description = promotional_in.promotional_description
        result.promotional_sale = promotional_in.promotional_sale
        result.promotional_start_date = promotional_in.promotional_start_date
        result.promotional_end_date = promotional_in.promotional_end_date
        propro_sql = _promotional_domains.ProProSQL
        statement = select(propro_sql).where(
            propro_sql.promotional_id == pro_id
        )
        result = session.exec(statement)
        for item in result:
            _ = session.delete(item)
        _ = session.commit()
        for product in promotional_in.list_product_id:
            product_id = product.product_id
            propro_id = generate_ksuid()
            propro = _promotional_domains.ProProSQL(
                propro_id=propro_id,
                promotional_id=pro_id,
                product_id=product_id
            )
            try:
                _ = session.add(propro)
                _ = session.commit()
            except Exception:
                raise HTTPException(
                    status_code=400, detail="There is no product id like that"
                )
    response = {
        "Message": "Updated promotional successfully"
    }
    return response
