import React, { useEffect, useState } from 'react';
import './Cart.css';
import Heading from '../Heading.js';
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
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
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
            // if (localStorage.getItem('BillID') === ) {
            axios.post('http://127.0.0.1:8000/bills/create-cart', '',
                {
                    headers: {
                        accept: 'application/json',
                        'authorization-token': token
                    }
                })
                .then(function (response) {
                    const idBill = response?.data.bill_id;
                    localStorage.setItem('BillID', idBill);
                })
                .catch(function (err) {
                    console.log(JSON.stringify(err, null, 2));
                })
            // }

            axios.get('http://127.0.0.1:8000/bills/get-cart',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization-token': token
                    }
                })
                .then(function (res) {
                    setCart(res.data)
                })
                .catch(function (err) {
                    console.log(JSON.stringify(err, null, 2));
                })
        }
    }, [token]);

    function createCart() {
        axios.post('http://127.0.0.1:8000/bills/create-cart', '',
            {
                headers: {
                    accept: 'application/json',
                    'authorization-token': token
                }
            })
            .then(function (response) {
                const idBill = response?.data.bill_id;
                localStorage.setItem('BillID', idBill);
            })
            .catch(function (err) {
                console.log(JSON.stringify(err, null, 2));
            })
    }


    const handleChange = e => {
        const { name, value } = e.target;
        setInfo({
            ...info,
            [name]: value
        });
    }

    console.log(info.Address);

    function formatCash(str) {
        return str.toString().split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
        })
    }

    const [payment, setPayment] = useState('truc-tiep');

    const handleOnChange = e => {
        const { name, value } = e.target;
        setPayment({
            [name]: value
        });
    }

    const handlePayment = () => {
        const total = cart.BillTotalCost;
        const billId = localStorage.getItem('BillID');
        // const returnUrl = window.location.href + `/info/` + billId;
        if (payment.payment_method === 'vn-pay') {
            const detail = `${info.FullName} thanh toan hoa don ${billId}`;

            axios.get(`http://127.0.0.1:8000/bills/vn-pay?vn_amount=${total}&vn_detail=${detail}&bill_id=${billId}&user_address=${info.Address}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization-token': token
                    }
                }
            )
                .then(function (res) {
                    createCart();
                    // console.log(res.data.PaymentURL);
                    window.location.href = res.data.PaymentURL;
                    // window.open(res.data.PaymentURL, '_blank') ;
                    // console.log(res.data.ReturnURL);
                })
                // .then(window.location.href = `localhost:3000/info`)
                .catch(function (err) {
                    console.log(JSON.stringify(err, null, 2));
                })
        }

        if (payment.payment_method === 'truc-tiep') {
            axios.put(`http://127.0.0.1:8000/bills/pay-by-cash?bill_id=${billId}&amount=${total}&user_address=${info.Address}`, '',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization-token': token
                    }
                })
                .then(function (res) {
                    // console.log(res.data);
                    setCart('');
                    alert('Đặt hàng thành công!');
                    createCart();
                })
                .catch(function (err) {
                    console.log(JSON.stringify(err, null, 2));
                })
        }
    }

    const [cartTotal, setCartTotal] = useState(cart.BillTotalCost ? cart.BillTotalCost : 0);
    const totalCost = (productQuantity) => {
        let temp = 0;
        cart.BillDetails.map((product) => {
            return temp += productQuantity * product.ProductCost;
        })

        setCartTotal(temp);
    }

    // const [isTotal, setIsTotal] = useState(false);

    // useEffect(() => {
    //     if(!isTotal) {
    //         totalCost();
    //         setIsTotal(true);
    //     }
    // },[isTotal])

    return (
        <>
            <Header />
            <div className="container cart-container">
                <div className="row">
                    <Heading mixin="Your cart" title="Giỏ hàng của bạn" />
                    {token && cart.BillDetails && cart.BillDetails.length !== 0 ?
                        <>
                            <div className="col-md">
                                {cart.BillDetails && cart.BillDetails?.map((product, index) => (
                                    <CartBox product={product} key={index} totalCost={totalCost} />
                                ))
                                }

                                <div className="cart-box">
                                    <div className="box-total">
                                        <div className="box-total__wrap">
                                            <p className="box-total-label">Tổng thanh toán</p>
                                            <p className="box-total-amount">{cartTotal === 0 && cart.BillTotalCost ? formatCash(cart.BillTotalCost) : formatCash(cartTotal)} VND</p>
                                        </div>
                                        <button className="box-total__btn" onClick={() => handlePayment()}>Thanh toán</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md">
                                <div className="cart-box">
                                    <div className="box-address">
                                        <p className="box-address__heading">Địa chỉ giao hàng</p>

                                        <input
                                            type="text"
                                            name='FullName'
                                            className="box-address__input"
                                            placeholder="Họ và tên"
                                            value={info.FullName}
                                            disabled
                                        ></input>


                                        <input
                                            type="text"
                                            name='Phone'
                                            className="box-address__input"
                                            placeholder="Số điện thoại"
                                            value={info.Phone}
                                            disabled
                                        ></input>


                                        <input
                                            type="text"
                                            name='Email'
                                            className="box-address__input"
                                            placeholder="Email"
                                            value={info.Email}
                                            disabled
                                        ></input>


                                        <input
                                            type="text"
                                            name='Address'
                                            className="box-address__input"
                                            placeholder="Địa chỉ"
                                            defaultValue={info.Address}
                                            onChange={handleChange}
                                        ></input>

                                    </div>
                                    <Line />

                                    <div className="box-payment">
                                        <p className="box-payment__heading">Phương thức thanh toán</p>
                                        <div className="box-payment-method">
                                            <input
                                                type="radio"
                                                id='vn-pay'
                                                value="vn-pay"
                                                className="box-payment__method"
                                                name="payment_method"
                                                onChange={handleOnChange}
                                            ></input>
                                            <label className="box-payment__label" htmlFor="vn-pay">Thanh toán bằng VN-Pay</label>
                                        </div>
                                        <div className="box-payment-method">
                                            <input
                                                type="radio"
                                                id='truc-tiep'
                                                value="truc-tiep"
                                                className="box-payment__method"
                                                name="payment_method"
                                                onChange={handleOnChange}
                                            ></input>
                                            <label className="box-payment__label" htmlFor="truc-tiep">Thanh toán khi nhận hàng</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </> :
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