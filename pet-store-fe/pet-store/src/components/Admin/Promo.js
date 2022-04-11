import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./Header"
function Promo(){

    const [promos, setPromo] = useState([])

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/product/get-all-promos',
        
            {
                headers: {
                    accept: 'application/json',
                    authorization_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6Im5oYW52aWVuMSIsImV4cCI6MTY0OTI2OTA0M30.j2bc1LxIdLKTUZT1rJGnY847swRKYVB7h-4qSN33QEQ'
                }
            }
        )
            .then(res => setPromo(res.data))
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }, []);
    console.log(promos);
    return(
        <div className="content-promo container-fluid"style={{paddingLeft:"0"}}>
        <div className="col-md" style={{paddingLeft:"0"}}><Header title="Khuyến mãi" /></div>
        <div style={{marginLeft:"70px"}}>
            <div className="title text-center"style={{paddingTop:"10px"}}>Khuyến mãi hiện hành</div>
            <div className="row d-flex justify-content-start">
            <table className="table table-striped col-md table-content" style={{width: '100%'}} >
                <thead>
                    <tr className= "text-center" >
                        <th>ID</th>
                        <th>Tên khuyến mãi</th>
                        <th>Số lượng</th>
                        <th>Loại sản phẩm</th>
                        <th>Thời gian bắt đầu</th>
                        <th>Thời gian kết thúc</th>
                        <th>Cập nhật</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>First Name</td>
                        <td>First Name</td>
                        <td>First Name</td>
                        <td>First Name</td>
                        <td>First Name</td>
                        <td className="text-center">
                            <i className="fa fa-edit"></i>
                            <i className="fa fa-delete-left"style={{paddingLeft:"10px"}}></i>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
            </div>
            </div>
            </div>
    )
}
export default Promo;