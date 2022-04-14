import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./Header"
function Bill() {

    const [bills, setBills] = useState([]);
    var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6Im5oYW52aWVuMSIsImV4cCI6MTY0OTY2MTk5N30.yx2vaDdKKvGSIRppgk2S0OU_GDL4SG_0yENPOxRUBA8'
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/bills/get-all-cart',
            {
                headers: {
                    accept: 'application/json',
                    'authorization-token': token
                }
            }
        )
            .then(res => setBills(res.data))
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }, []);
    const [select, setSelect] = useState();
    async function handleChange(e, billID, staffID, paymentMethod, amount) {
        // const { name, value } = e.target;
        // setSelect({[name]: value})
        console.log( billID, staffID, paymentMethod, amount)
        setSelect( e.target.value)
        await axios({
            method: "put",
            url: `http://127.0.0.1:8000/bills/set-complete?bill_id=${billID}&employee_id=${staffID}&payment_method=${paymentMethod}&amount=${parseInt(amount)}`,
            // data:{billID:billID,staffID:staffID,paymentMethod:paymentMethod,amount:amount},
            headers: {
                accept: 'application/json',
                'authorization-token': token,
            }}).then(function (response) {
            renderUI();
            // window.location.reload();
        })

            .catch(function (response) {
                //handle error
                console.log(response);
            });
           


    }
    console.log(select)
    // const [date,setDate]= useState();
    // setDate(new Date().toLocaleString("en-US", { day : '2-digit'}))
    const renderUI = () => {
        axios.get('http://127.0.0.1:8000/bills/get-all-cart',
            {
                headers: {
                    accept: 'application/json',
                    'authorization-token': token
                }
            }
        )
            .then(res => setBills(res.data))
            .catch(err => console.log(JSON.stringify(err, null, 2)))
            console.log(bills)
        bills.map((b, i) => {
            console.log(b)
            return (
                <table className="table table-striped col-md table-content" style={{ width: '100%' }} >
                    <thead>
                        <tr>
                            <th>Create date</th>
                            <th>Tên kh</th>
                            <th>Tình trạng</th>
                            <th>Ngày giao</th>
                            <th>Nhân viên nhận đơn</th>
                            <th>Amount</th>
                            <th>Pay method</th>
                            <th>Ngay cap nhat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={i}>
                            <td>{b.bill_created_date}</td>
                            <td>{b.customer_id}</td>
                            <td>
                                <select className="form-control-lg border input-items option-type" name="status" onChange={(e) => handleChange(e, b.bill_id, b.employee_id, b.pay_method, b.bill_total)}>

                                    {status.map((a, index) => {
                                        if (b.bill_status === a) {
                                            return (
                                                <option value={a} selected key={index}>{a}</option>
                                            )
                                        } else {
                                            return (
                                                <option value={a} key={index}>{a}</option>
                                            )
                                        }
                                    })}
                                </select>
                            </td>
                            <td>{b.bill_delivery_date}</td>

                            <td>{b.employee_id}</td>
                            <td>{b.bill_total}</td>
                            <td>{b.pay_method}</td>
                            <td>{b.update_at = new Date().toLocaleString() + ""}</td>
                        </tr>
                    </tbody>
                </table>
            )
        })
    }
    console.log(bills && bills);
    const status = ['Completed', 'Incomplete', 'New']
    return (
        <div className="content-bill container-fluid" style={{ paddingLeft: "0" }}>
            <div className="col-md" style={{ paddingLeft: "0" }}><Header title="Đơn hàng" /></div>

            <div className="title text-center" style={{ paddingTop: "10px" }}>Đơn hàng</div>
            <div className="row d-flex justify-content-start" style={{ marginLeft: '64px' }}>
                <table className="table table-striped col-md table-content" style={{ width: '100%' }} >
                    <thead>
                        <tr>
                            <th>Create date</th>
                            <th>Tên kh</th>
                            <th>Tình trạng</th>
                            <th>Ngày giao</th>
                            <th>Nhân viên nhận đơn</th>
                            <th>Amount</th>
                            <th>Pay method</th>
                            <th>Ngay cap nhat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bills && bills.map((b, i) => {

                            return (

                                <tr key={i}>
                                    <td>{b.bill_created_date}</td>
                                    <td>{b.CustomerName}</td>
                                    <td>
                                        <select className="form-control-lg border input-items option-type" name="status" onChange={(e) => handleChange(e, b.bill_id, b.employee_id, b.pay_method, b.bill_total)}>

                                            {status.map((a, index) => {
                                                if (b.bill_status === a) {
                                                    return (
                                                        <option value={a} selected key={index}>{a}</option>
                                                    )
                                                } else {
                                                    return (
                                                        <option value={a} key={index}>{a}</option>
                                                    )
                                                }
                                            })}
                                        </select>
                                    </td>
                                    <td>{b.bill_delivery_date}</td>

                                    <td>{b.EmployeeName}</td>
                                    <td>{b.bill_total}</td>
                                    <td>{b.pay_method}</td>
                                    <td>{b.updated_at}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Bill;