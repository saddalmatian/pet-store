import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./Header"
function Bill(){

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
    console.log(token);
    console.log(bills);

    return(
        <div className="content-bill container-fluid"style={{paddingLeft:"0"}}>
                <div className="col-md" style={{paddingLeft:"0"}}><Header title="Đơn hàng" /></div>

            <div className="title text-center"style={{paddingTop:"10px"}}>Đơn hàng</div>
            <div className="row d-flex justify-content-start" style={{marginLeft:'64px'}}>
            <table className="table table-striped col-md table-content" style={{width: '100%'}} >
                <thead>
                    <tr>
                        <th>Create date</th>
                        <th>Tên kh</th>
                        <th>Tình trạng</th>
                        <th>Ngày mua</th>
                        <th>Nhân viên nhận đơn</th>
                        <th>Pay method</th>
                    </tr>
                </thead>
                <tbody>
                    {bills.map((b, i) =>{return(
                        <tr key={i}>
                            <td>{b.bill_created_date}</td>
                            <td>{b.customer_id}</td>
                            <td>{b.bill_status}</td>
                            <td>{b.bill_delivery_date}</td>
                            <td>{b.employee_id}</td>
                            <td>{b.pay_method}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
            </div>
            </div>
    )
}
export default Bill;