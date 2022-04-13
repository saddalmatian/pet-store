import React from "react";
import Hinh from '../../assets/images/VongThoCam.jpg';

function CartBox({...props}) {
    return (
        <div className="cart-box">
            <div className="box-product">
                <div className="box-product__image">
                    <img src={Hinh} alt="product_img" className="box-product__img"></img>
                </div>
                <div className="box-product__info">
                    <p className="box-product__name">Vòng thổ cẩm box-product-quantity__num</p>
                    <p className="box-product__price">650.000đ</p>
                    <p className="box-product__delete">Delete</p>
                </div>
                <div className="box-product__quantity">
                    <p className="box-product__label">Số lượng</p>
                    <div className="box-product__action">
                        <button type="button" className="box-product-btn__plus">-</button>
                        <p className="box-product-quantity__num">1</p>
                        <button type="button" className="box-product-btn__minus">+</button>
                    </div>
                </div>
                <div className="box-product__subtotal">
                    <p className="box-product__label">Thành tiền</p>
                    <p className="box-product__subtotal-amount">1.600.000đ</p>
                </div>
            </div>
        </div>
    )
}

export default CartBox;