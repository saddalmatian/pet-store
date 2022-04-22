import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./Header"
import SideBar from './Sidebar'
import Login from './SignIn'
function Bill() {

    const [sideNavExpanded, setSideNavExpanded] = React.useState(false);

    function handleResize() {
        // iPhone X width, for example
        if (window.innerWidth <= 375) {
          setSideNavExpanded(false);
    
          // write other logic here such as disabling hamburger button
        }
      }
    
      React.useEffect(() => {
        window.addEventListener("resize", handleResize);
    
        handleResize(); // on-component-mount, check already to see if user has a small device
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []); 
      const contentStyle = {
        marginLeft: sideNavExpanded ? "250px" : "70px", // arbitrary values
        transition: "margin 0.2s ease"
      };
    
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
    async function handleChange(e, billID) {
        // const { name, value } = e.target;
        // setSelect({[name]: value})

        setSelect( e.target.value)
        await axios({
            method: "put",
            url: `http://127.0.0.1:8000/bills/set-complete?bill_id=${billID}`,
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
                            <th>Ngày tạo </th>
                            <th>Tên khách hàng</th>
                            <th>Trạng thái</th>
                            <th>Ngày giao</th>
                            <th>Nhân viên nhận đơn</th>
                            <th>Thanh toán</th>
                            <th>Phương thức thanh toán</th>
                            <th>Ngày cập nhật</th>
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
    const status = ['Hoàn thành', 'Chưa hoàn thành', 'Mới']
    return (
        !localStorage.getItem('token') ? <Login/>  : (
        <div>
            <SideBar
                setSideNavExpanded={setSideNavExpanded}
                sideNavExpanded={sideNavExpanded}
            />
            <div style={contentStyle}>
        <div className="content-bill container-fluid" style={{ paddingLeft: "0" }}>
            <div className="col-md" style={{ paddingLeft: "0" }}><Header title="Đơn hàng" />

            <div className="title text-center" style={{ paddingTop: "10px" }}>Đơn hàng</div>
            <div className="row d-flex justify-content-start">
                <table className="table table-striped col-md table-content" style={{ width: '100%' }} >
                    <thead>
                        <tr>
                        <th>Ngày tạo </th>
                            <th>Tên khách hàng</th>
                            <th>Trạng thái</th>
                            <th>Ngày giao</th>
                            <th>Nhân viên nhận đơn</th>
                            <th>Thanh toán</th>
                            <th>Phương thức thanh toán</th>
                            <th>Ngày cập nhật</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bills && bills.map((b, i) => {

                            return (

                                <tr key={i}>
                                    <td>{b.bill_created_date}</td>
                                    <td>{b.CustomerName}</td>
                                    <td>
                                        <select className="form-control-lg border input-items option-type" name="status" onChange={(e) => handleChange(e, b.bill_id)}>

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
        </div>
        </div></div>
    ))
}
export default Bill;