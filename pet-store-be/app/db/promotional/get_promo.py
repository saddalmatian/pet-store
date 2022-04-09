from fastapi import HTTPException
from sqlmodel import Session, select
from app.api.models.domains import (
    promotionals as _prmotional_domains,
    products as _product_domains
)
from app.utils.db_helper import engine


def get_promo(promotional_id: str):
    promotional = _prmotional_domains.PromotionalSQL
    propro = _prmotional_domains.ProProSQL
    product_sql = _product_domains.ProductSQL
    response = {}
    with Session(engine) as session:
        statement = select(promotional).where(
            promotional.promotional_id == promotional_id
        )
        try:
            result = session.exec(statement).one()
            response.update(
                {
                    "Promotional": result.dict()
                }
            )
        except Exception:
            raise HTTPException(
                status_code=400,
                detail='There is no promotional id in database'
            )
        list_product = []
        statement = select(propro).where(
            propro.promotional_id == promotional_id
        )
        result = session.exec(statement)
        for product in result:
            statement = select(product_sql).where(
                product_sql.product_id == product.product_id
            )
            result_product = session.exec(statement).first()
            list_product.append(result_product.dict())
        response.update(
            {
                "ListProducts": list_product
            }
        )
        return response
