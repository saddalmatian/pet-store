import React, { useEffect, useState } from 'react';
import './Cart.css';
import Heading from '../Heading.js';
import Hinh from '../../assets/images/VongThoCam.jpg';
import Line from '../Line';
import axios from 'axios';
import Header from '../Header/Header'

function Cart() {

    const [info, setInfo] = useState([]);

    const token = localStorage.getItem('Token');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/customers/get-customer-detail',
            {
                headers: {
                    accept: 'application/json',
                    'authorization-token': token
                }
            }
        )
            .then(res => setInfo(res.data))
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }, [])

    return (
        <>
            <Header />
            <div className="container cart-container">
                <div className="row">
                    <Heading mixin="Your cart" title="Giỏ hàng của bạn" />
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

                        <div className="cart-box">
                            <div className="box-total">
                                <div className="box-total__wrap">
                                    <p className="box-total-label">Tổng thanh toán</p>
                                    <p className="box-total-amount">1.200.000đ</p>
                                </div>
                                <button className="box-total__btn">Order</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md">
                        <div className="cart-box">
                            <div className="box-address">
                                <p className="box-address__heading">Địa chỉ giao hàng</p>
                                {
                                    info.FullName &&
                                    <input type="text" className="box-address__input" placeholder="Họ và tên" defaultValue={info.FullName}></input>
                                }
                                {
                                    info.Phone &&
                                    <input type="text" className="box-address__input" placeholder="Số điện thoại" defaultValue={info.Phone}></input>
                                }
                                {
                                    info.Email &&
                                    <input type="text" className="box-address__input" placeholder="Email" defaultValue={info.Email}></input>
                                }
                                {
                                    info.Address &&
                                    <input type="text" className="box-address__input" placeholder="Địa chỉ" defaultValue={info.Address}></input>
                                }
                            </div>
                            <Line />

                            <div className="box-payment">
                                <p className="box-payment__heading">Phương thức thanh toán</p>
                                <div className="box-payment-method">
                                    <input type="radio" className="box-payment__method" name="payment_method"></input>
                                    <label className="box-payment__label" htmlFor="payment_method">Thanh toán bằng VN-Pay</label>
                                </div>
                                <div className="box-payment-method">
                                    <input type="radio" checked className="box-payment__method" name="payment_method"></input>
                                    <label className="box-payment__label" htmlFor="payment_method">Thanh toán khi nhận hàng</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;