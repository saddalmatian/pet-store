import React, { useEffect, useState } from "react";
import './Info.css';
import Header from '../Header/Header';
import Heading from '../Heading';
import axios from "axios";
import { Link } from 'react-router-dom';

function Info() {
    const [bills, setBills] = useState('');
    const token = localStorage.getItem('Token');

    useEffect(() => {
        if (token) {
            axios.get(`http://127.0.0.1:8000/bills/get-all-cart`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization-token': token
                    }
                }
            )
                .then(function (res) {
                    setBills(res.data);
                })
                .catch(function (err) {
                    console.log(JSON.stringify(err, null, 2));
                })
        }
    }, [token])

    function formatCash(str) {
        return str.toString().split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
        })
    }

    return (
        <>
            <Header />
            <div className="container bill-info">
                <div className="row">
                    <div className="col-md">
                        <Heading mixin="Bill Information" title="Thông tin đơn hàng của bạn" />

                        <table className="table">
                            <thead className="table-head">
                                <tr>
                                    <th scope="col">Số thứ tự</th>
                                    <th scope="col">Ngày đặt hàng</th>
                                    <th scope="col">Tổng thanh toán</th>
                                    <th scope="col">Phương thức thanh toán</th>
                                    <th scope="col">Trạng thái</th>
                                    <th scope="col">Hoạt động</th>
                                </tr>
                            </thead>
                            
                            <tbody className="table-body">
                                {
                                    bills && bills?.map((bill, index) => (
                                        bill.bill_total === 0 ? null :
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{bill.bill_created_date}</td>
                                            {bill.bill_total && <td>{formatCash(bill.bill_total)}</td>}
                                            <td>{bill.pay_method}</td>
                                            <td>{bill.bill_status}</td>
                                            <td className="bill-detail">
                                                <Link to={`/bill_detail/${bill.bill_id}`}>Xem chi tiết</Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info;