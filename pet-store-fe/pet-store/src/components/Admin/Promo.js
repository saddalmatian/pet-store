import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./Header"
function Promo() {

    const [promos, setPromo] = useState([])
    var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6Im5oYW52aWVuMSIsImV4cCI6MTY0OTY2MTk5N30.yx2vaDdKKvGSIRppgk2S0OU_GDL4SG_0yENPOxRUBA8'

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/promotionals/get-all-promotional',

            {
                headers: {
                    accept: 'application/json',
                    'authorization-token': token
                }
            }
        )
            .then(res => setPromo(res.data))
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }, []);
    console.log(promos[0]?.Promotional.promotional_name);
    console.log(promos[0]);
    // promos[0].Promotional && promos[0]?.Promotional.map((promo, index) => (console.log(promo)))
    // console.log(promos?.map((promo, index) =>(promo.promotional_name)))

    return (

        <div className="content-promo container-fluid" style={{ paddingLeft: "0" }}>
            <div className="col-md" style={{ paddingLeft: "0" }}><Header title="Khuyến mãi" /></div>
            <div style={{ marginLeft: "70px" }}>
                <div className="title text-center" style={{ paddingTop: "10px" }}>Khuyến mãi hiện hành</div>
                <div className="row d-flex justify-content-start">
                    <table className="table table-striped col-md table-content" style={{ width: '100%' }} >
                        <thead>
                            <tr className="text-center" >
                                <th>Tên khuyến mãi</th>
                                <th>Số lượng</th>
                                <th>Loại sản phẩm</th>
                                <th>Thời gian bắt đầu</th>
                                <th>Thời gian kết thúc</th>
                                <th>Cập nhật</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {promos.Promotional && promos.Promotional?.map((promo, index) => ( */}

                                <tr >
                                    {/* {console.log(promo)} */}
                                    {/* <td>{promos[0].Promotional && promos[0].Promotional.promotional_name}</td>
                                    <td>{promos[0].Promotional && promos[0].Promotional.promotional_sale}</td>
                                    <td>{promos[0].Promotional && promos[0].Promotional.promotional_description}</td>
                                    <td>{promos[0].Promotional && promos[0].Promotional.promotional_start_date}</td>
                                    <td>{promos[0].Promotional && promos[0].Promotional.promotional_end_date}</td> */}
                                    <td className="text-center">
                                        <i className="fa fa-edit"></i>
                                        <i className="fa fa-delete-left" style={{ paddingLeft: "10px" }}></i>
                                    </td>
                                </tr>
                            {/* ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Promo;