from app.utils.db_helper import engine, generate_ksuid
from sqlmodel import Session
from fastapi import HTTPException
from app.api.models.domains import promotionals as _promotional_domains
from app.api.models.schemas import promotionals as _schemas_promtional


def create_promo(
    promotional_in: _schemas_promtional.PromotionalIn
) -> dict:
    pro_id = generate_ksuid()
    start_date = promotional_in.promotional_start_date
    end_date = promotional_in.promotional_end_date
    if end_date < start_date:
        raise HTTPException(
            status_code=400, detail='Start date can not greater than end date'
        )
    with Session(engine) as session:
        promotional = _promotional_domains.PromotionalSQL(
            **promotional_in.dict(),
            **{"promotional_id": pro_id}
        )
        _ = session.add(promotional)
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
        "Message": "Create promotional successfully"
    }
    return response
