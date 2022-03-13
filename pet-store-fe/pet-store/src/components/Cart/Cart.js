import React from 'react';
import './Cart.css';
import Heading from '../Heading.js';
import Hinh from '../../assets/images/VongThoCam.jpg';
import Line from '../Line';

function Cart() {
    return (
        <div className="container cart-container">
            <div className="row">
                <Heading mixin="Your cart" title="Something Cute For Your Pet" />
                <div className="col-md">
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
                                <p className="box-product__label">Quantity</p>
                                <div className="box-product__action">
                                    <button type="button" class="box-product-btn__plus">-</button>
                                    <p className="box-product-quantity__num">1</p>
                                    <button type="button" class="box-product-btn__minus">+</button>
                                </div>
                            </div>
                            <div className="box-product__subtotal">
                                <p className="box-product__label">Subtotal</p>
                                <p className="box-product__subtotal-amount">1.600.000đ</p>
                            </div>
                        </div>
                    </div>
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
                                <p className="box-product__label">Quantity</p>
                                <div className="box-product__action">
                                    <button type="button" class="box-product-btn__plus">-</button>
                                    <p className="box-product-quantity__num">1</p>
                                    <button type="button" class="box-product-btn__minus">+</button>
                                </div>
                            </div>
                            <div className="box-product__subtotal">
                                <p className="box-product__label">Subtotal</p>
                                <p className="box-product__subtotal-amount">1.600.000đ</p>
                            </div>
                        </div>
                    </div>
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
                                <p className="box-product__label">Quantity</p>
                                <div className="box-product__action">
                                    <button type="button" class="box-product-btn__plus">-</button>
                                    <p className="box-product-quantity__num">1</p>
                                    <button type="button" class="box-product-btn__minus">+</button>
                                </div>
                            </div>
                            <div className="box-product__subtotal">
                                <p className="box-product__label">Subtotal</p>
                                <p className="box-product__subtotal-amount">1.600.000đ</p>
                            </div>
                        </div>
                    </div>

                    <div className="cart-box">
                        <div className="box-total">
                            <div className="box-total__wrap">
                                <p className="box-total-label">Total</p>
                                <p className="box-total-amount">1.200.000đ</p>
                            </div>
                            <button className="box-total__btn">Order</button>
                        </div>
                    </div>
                </div>

                <div className="col-md">
                    <div className="cart-box">
                        <div className="box-address">
                            <p className="box-address__heading">Delivery Address</p>
                            <input type="text" className="box-address__input" placeholder="Full Name"></input>
                            <input type="text" className="box-address__input" placeholder="Phone Number"></input>
                            <input type="text" className="box-address__input" placeholder="Email"></input>
                            <select className="box-address__input">
                                <option value="0">Địa chỉ cũ</option>
                                <option value="1">Địa chỉ 2</option>
                                <option value="2">Địa chỉ mới</option>
                            </select>
                        </div>
                        <Line />

                        <div className="box-payment">
                            <p className="box-payment__heading">Payment Methods</p>
                            <div className="box-payment-method">
                                <input type="radio" className="box-payment__method" name="payment_method"></input>
                                <label className="box-payment__label" htmlFor="payment_method">Pay With Momo</label>
                            </div>
                            <div className="box-payment-method">
                                <input type="radio" checked className="box-payment__method" name="payment_method"></input>
                                <label className="box-payment__label" htmlFor="payment_method">Payment On Delivery</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;