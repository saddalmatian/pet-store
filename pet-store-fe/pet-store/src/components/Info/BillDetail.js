import React, { useState, useEffect } from 'react';
import './BillDetail.css';
import Header from '../Header/Header';
import Heading from '../Heading';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import MyDoc from './MyDocument';
// import ReactPDF from '@react-pdf/renderer';
import Pdf from "react-to-pdf";


function BillDetail() {

    const [info, setInfo] = useState([]);
    const [cart, setCart] = useState({});
    const token = localStorage.getItem('Token');
    const { idBill } = useParams();
    const ref = React.createRef();

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
    }, [token, idBill])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/bills/get-cart-detail?bill_id=${idBill}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'authorization-token': token
                }
            })
            .then(res => setCart(res.data))
            .catch(function (err) {
                console.log(JSON.stringify(err, null, 2));
            })
    }, [token, idBill])

    function formatCash(str) {
        return str.toString().split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
        })
    }

    const options = {
        orientation: 'landscape',
    };

    return (
        <>
            <Header />
            <div ref={ref} className="container bill-detail__ctn">
                <Heading mixin="Bill Detail" title="Chi tiết đơn hàng" />
                <div className="row">
                    <div className="col-md bill-table">
                        <p className="bill-heading">Thông tin khách hàng</p>

                        <div className="bill-information d-flex">
                            <p className="bill-label">Họ và tên:</p>
                            {info.FullName && <p className="bill-values">{info.FullName}</p>}
                        </div>

                        <div className="bill-information d-flex">
                            <p className="bill-label">Email:</p>
                            {info.Email && <p className="bill-values">{info.Email}</p>}
                        </div>

                        <div className="bill-information d-flex">
                            <p className="bill-label">Địa chỉ:</p>
                            {info.Address && <p className="bill-values">{info.Address}</p>}
                        </div>

                        <div className="bill-information d-flex">
                            <p className="bill-label">Số điện thoại:</p>
                            {info.Phone && <p className="bill-values">{info.Phone}</p>}
                        </div>
                    </div>

                    {cart.Bill &&
                        <div className="col-md bill-table">
                            <p className="bill-heading">Thông tin đơn hàng</p>

                            <div className="bill-information d-flex">
                                <p className="bill-label">Mã đơn:</p>
                                {cart.Bill.bill_id && <p className="bill-values">{cart.Bill.bill_id}</p>}
                            </div>

                            <div className="bill-information d-flex">
                                <p className="bill-label">Tình trạng:</p>
                                {cart.Bill.bill_status && <p className="bill-values">{cart.Bill.bill_status}</p>}
                            </div>

                            <div className="bill-information d-flex">
                                <p className="bill-label">Phương thức thanh toán:</p>
                                {cart.Bill.pay_method && <p className="bill-values">{cart.Bill.pay_method}</p>}
                            </div>

                            <div className="bill-information d-flex">
                                <p className="bill-label">Ngày giao dự kiến:</p>
                                {cart.Bill.bill_delivery_date && <p className="bill-values">{cart.Bill.bill_delivery_date}</p>}
                            </div>
                        </div>
                    }
                </div>

                <div className="row product-list">
                    <table className="table">
                        <thead className="table-head">
                            <tr>
                                <th scope="col">Số thứ tự</th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Đơn giá</th>
                                <th scope="col">Thành tiền</th>
                            </tr>
                        </thead>

                        <tbody className="table-body">
                            {
                                cart.BillDetails && cart.BillDetails?.map((product, i) => (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{product.ProductName}</td>
                                        <td>{product.ProductQuantity}</td>
                                        <td>{formatCash(product.ProductCost)}</td>
                                        <td>{formatCash(product.ProductTotalCost)}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div className="row bill-des">
                    <div className="col-md bill-thank">
                        <p className="bill-description">- Pet Store xin cám ơn sự tin tưởng và đặt hàng của quý khách.<br />
                            - Tùy vào tình hình vận chuyển mà đơn hàng của bạn sẽ được giao
                            trong khoảng từ 3-5 ngày.<br />
                            - Trường hợp đơn hàng được giao đến không đúng với sản phẩm quý
                            khách đã đặt hoặc có gì sai sót. Quý khách vui lòng liên hệ
                            ngay đến Pet Store để được hỗ trợ và hoàn trả miễn phí nhé.<br />
                            - Một lần nữa Pet Store xin cám ơn quý khách rất nhiều!!!
                        </p>
                    </div>

                    <div className="col-md">
                        <div className="d-flex bill-total">
                            <p className="bill-total-lable">Tổng thanh toán:</p>
                            {cart.BillTotalCost && <p className="bill-total__value">{formatCash(cart.BillTotalCost)} VND</p>}
                        </div>
                    </div>
                </div>

            </div>
            <div className="bill-button">
                <Pdf targetRef={ref} filename="bill.pdf" options={options} scale={0.85}>
                    {({ toPdf }) => <button className="bill-btn" onClick={toPdf}>
                        <i className="fa-solid fa-print bill-icon"></i>
                        In hóa đơn
                    </button>
                    }
                </Pdf>
            </div>
        </>
    )
}

export default BillDetail;