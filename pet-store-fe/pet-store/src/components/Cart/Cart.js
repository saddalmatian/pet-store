import React, { useEffect, useState } from 'react';
import './Cart.css';
import Heading from '../Heading.js';
import Hinh from '../../assets/images/VongThoCam.jpg';
import Line from '../Line';
import axios from 'axios';
import Header from '../Header/Header';
import CartBox from './CartBox';

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
    }, [token])

    const [cart, setCart] = useState({});
    useEffect(() => {
        if (token) {
            axios.get('http://127.0.0.1:8000/bills/get-cart',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization-token': token
                    },
                }
            ).then(function (res) {
                setCart(res.data)
            })
            .catch(function (err) {
                if(err.response?.status === 404) {
                    console.log('No')
                }
            })
        }
    }, [token]);

    console.log(cart);

    return (
        <>
            <Header />
            <div className="container cart-container">
                <div className="row">
                    <Heading mixin="Your cart" title="Giỏ hàng của bạn" />
                    {token && cart ?
                    <>
                    
                    <div className="col-md">
                        {cart.BillDetail && cart.BillDetail?.map()}
                        <CartBox product={cart.BillDetail}/>

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
                    </>    :
                    <div className="col-md">
                        <div className="cart-box cart-null">Giỏ hàng rỗng!</div>
                    </div>
                }
                </div>
            </div>
        </>
    );
}

export default Cart;