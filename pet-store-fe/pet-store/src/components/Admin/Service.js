import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./Header"
import SideBar from './Sidebar'
import Login from './SignIn'
function Service() {

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

    const [listSer, setListSer] = useState([]);
    var token = localStorage.getItem('token')
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/bookings/get-all-booking',
            {
                headers: {
                    accept: 'application/json',
                    'authorization-token': token
                }
            }
        )
            .then(res => setListSer(res.data))
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }, []);
    console.log(listSer)
    const [select, setSelect] = useState();
    async function handleChange(e, serID, total) {
        // const { name, value } = e.target;
        // setSelect({[name]: value})

        setSelect(e.target.value)
        await axios({
            method: "post",
            url: `http://127.0.0.1:8000/bookings/finish-booking`,
            data: { BookId: serID, Total: parseInt(total) },
            headers: {
                accept: 'application/json',
                'authorization-token': token,
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            renderUI();
            // window.location.reload();
        })

            .catch(function (response) {
                //handle error
                console.log(response);
            });



    }
    console.log(select)

    async function renderUI() {
        await axios.get('http://127.0.0.1:8000/bookings/get-all-booking',
            {
                headers: {
                    accept: 'application/json',
                    'authorization-token': token
                }
            }
        )
            .then(res => setListSer(res.data))
            .catch(err => console.log(JSON.stringify(err, null, 2)))
        console.log(listSer)
        listSer.map((b, i) => {
            console.log(b)
            return (
                    <tbody>

                        <tr key={i}>
                            <td>{b.BookTime}</td>
                            <td>{b.FullName}</td>
                            <td>
                                <select className="form-control-lg border input-items option-type" name="status" onChange={(e) => handleChange(e, b.BookId, b.Total)}>

                                    {status.map((a, index) => {
                                        if (b.BookStatus === a) {
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
                            <td>{b.BookType}</td>

                            <td>{b.Email}</td>
                            <td>{b.PetAmount}</td>
                            <td>{b.Phone}</td>
                            <td>{b.Total}</td>
                            <td>{b.Note}</td>
                            <td>{b.FinishDate = new Date().toLocaleString() + ""}</td>
                        </tr>


                    </tbody>    
            )
        })
    }

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
                    <div className="col-md" style={{ paddingLeft: "0" }}><Header title="Dịch vụ" />

                        <div className="title text-center" style={{ paddingTop: "10px" }}>Đặt dịch vụ</div>
                        <div className="row d-flex justify-content-start">
                            <table className="table table-striped col-md table-content" style={{ width: '100%' }} >
                                <thead>
                                    <tr>
                                        <th>Ngày đặt</th>
                                        <th>Tên khách hàng</th>
                                        <th>Trạng thái</th>
                                        <th>Loại dịch vụ</th>
                                        <th>Email</th>
                                        <th>Số lượng thú cưng</th>
                                        <th>Số điện thoại</th>
                                        <th>Thanh toán</th>
                                        <th>Ghi chú</th>
                                        <th>Ngày hoàn thành</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {listSer && listSer.map((b, i) => {

                                        return (

                                            <tr key={i}>
                                                <td>{b.BookTime}</td>
                                                <td>{b.FullName}</td>
                                                <td>
                                                    <select className="form-control-lg border input-items option-type" name="status" onChange={(e) => handleChange(e, b.BookId, b.Total)}>

                                                        {status.map((a, index) => {
                                                            if (b.BookStatus === a) {
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
                                                <td>{b.BookType}</td>

                                                <td>{b.Email}</td>
                                                <td>{b.PetAmount}</td>
                                                <td>{b.Phone}</td>
                                                <td>{b.Total}</td>
                                                <td>{b.Note}</td>
                                                <td>{b.FinishDate}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div></div>)
    )
}
export default Service;