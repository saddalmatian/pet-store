from fastapi import HTTPException
from app.api.models.domains import (
    bills as _domain_bills,
    products as _domain_products,
    images as _domain_images
)
from app.utils.db_helper import engine, get_userid_from_username
from sqlmodel import Session, select
from operator import and_


def get_cart_details(bill_id: str):
    cart = _domain_bills.BillSQL
    cart_detail = _domain_bills.BillDetailSQL
    with Session(engine) as session:
        statement = select(cart).where(
            cart.bill_id == bill_id,
        )
        response = {}
    try:
        result = session.exec(statement).one()
        response.update(
                {
                    "Bill": {**result.dict()}
                }
            )
        statement = select(cart_detail).where(
                cart_detail.bill_id == bill_id
            )
        detail_result = session.exec(statement)
        bill_detail_result = []
        bill_cost = 0
        for bill_detail in detail_result:
            product_id = bill_detail.product_id
            product = _domain_products.ProductSQL
            statement = select(product).where(
                product.product_id == product_id
            )
            try:
                result = session.exec(statement).first()
            except Exception:
                raise HTTPException(
                    status_code=404, detail='Product not found'
                )
            image = _domain_images.ImageSQL
            statement = select(image).where(
                and_(
                    image.product_id == product_id,
                    image.image_display == 1
                )
            )
            try:
                result_image = session.exec(statement).first()
            except Exception:
                raise HTTPException(
                    status_code=404, detail='Image not found'
                )
            product_total_cost = \
                bill_detail.cost * bill_detail.product_quantity
            bill_cost += product_total_cost
            temp_response = {
                "ProductTotalCost": product_total_cost,
                "PromotionalID": bill_detail.promotional_id,
                "ProductQuantity": bill_detail.product_quantity,
                "ProductID": product_id,
                "BillID": bill_detail.bill_id,
                "ImageSource": result_image.image_source,
                "ProductName": result.product_name,
                "ProductCost": bill_detail.cost,
                "ProductOriginalQuantity": result.product_quantity
            }
            bill_detail_result.append(temp_response)
        response.update(
            {
                "BillDetails": bill_detail_result,
                "BillTotalCost": bill_cost
            }
        )
        return response
    except Exception:
        raise HTTPException(
            status_code=404, detail="There is no cart!"
        )


def get_the_cart(username):
    cart = _domain_bills.BillSQL
    cart_detail = _domain_bills.BillDetailSQL
    user_id = get_userid_from_username(username, is_customer=True)
    response = {}
    with Session(engine) as session:
        statement = select(cart).where(
            and_(
                cart.customer_id == user_id,
                cart.bill_status == 'Chưa xác nhận'
            )
        )
        try:
            result = session.exec(statement).one()
            bill_id = result.bill_id
            response.update(
                {
                    "Bill": {**result.dict()}
                }
            )
            statement = select(cart_detail).where(
                cart_detail.bill_id == bill_id
            )
            detail_result = session.exec(statement)
            bill_detail_result = []
            bill_cost = 0
            for bill_detail in detail_result:
                product_id = bill_detail.product_id
                product = _domain_products.ProductSQL
                statement = select(product).where(
                    product.product_id == product_id
                )
                try:
                    result = session.exec(statement).first()
                except Exception:
                    raise HTTPException(
                        status_code=404, detail='Product not found'
                    )
                image = _domain_images.ImageSQL
                statement = select(image).where(
                    and_(
                        image.product_id == product_id,
                        image.image_display == 1
                    )
                )
                try:
                    result_image = session.exec(statement).first()
                except Exception:
                    raise HTTPException(
                        status_code=404, detail='Image not found'
                    )
                product_total_cost = \
                    bill_detail.cost * bill_detail.product_quantity
                bill_cost += product_total_cost
                temp_response = {
                    "ProductTotalCost": product_total_cost,
                    "PromotionalID": bill_detail.promotional_id,
                    "ProductQuantity": bill_detail.product_quantity,
                    "ProductID": product_id,
                    "BillID": bill_detail.bill_id,
                    "ImageSource": result_image.image_source,
                    "ProductName": result.product_name,
                    "ProductCost": bill_detail.cost,
                    "ProductOriginalQuantity": result.product_quantity
                }
                bill_detail_result.append(temp_response)
            response.update(
                {
                    "BillDetails": bill_detail_result,
                    "BillTotalCost": bill_cost
                }
            )
        except Exception:
            raise HTTPException(
                status_code=404, detail="There is no cart created yet !"
            )
        return response
