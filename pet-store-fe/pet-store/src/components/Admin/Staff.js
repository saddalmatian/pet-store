import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./Header"
import SideBar from './Sidebar'
import ModalAddStaff from "./ModalAddStaff"
function Staff() {

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
    const [staffs, setStaff] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/employees/get-all-employees',

            {
                headers: {
                    accept: 'application/json',
                    'authorization-token': localStorage.getItem('token')
                }
            }
        )
            .then(res => setStaff(res.data))
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }, [])
    console.log(staffs)

    //delete staff
    const removeData = (username) => {
        axios.delete(`http://127.0.0.1:8000/employees/delete-employee?employee_username=${username}`,
            {
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'authorization-token': localStorage.getItem('token'),
                }
            }
        ).then(res => {
            const del = staffs.filter(staff => username !== staff.Username);
            setStaff(del);
            renderStaff();
        })
    }

    const renderStaff = () => {
        return staffs.map((staff, index) => {
            return (
                <tr key={index}>
                    <td>{staff.Username}</td>
                    <td>{staff.FullName}</td>

                    <td>{staff.Age}</td>
                    <td>{staff.Phone}</td>
                    <td>{staff.Email}</td>
                    <td className="text-center p-0"  >
                        <button className="btn btn-lg"
                        >
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="btn btn-lg" onClick={() => removeData(staff.Username)}>
                            <i className="fa fa-delete-left" ></i>
                        </button>

                    </td>
                </tr>
            )
        })
    }
    //update staff information 
    const initValues = {
        fullName: '',
        phone: '',
        age: '',
        pwd: ''
    }
    const [formValues, setFormValues] = useState(initValues);
    const handleChange = e => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }
    console.log(formValues)
    async function updateStaff(fullname, phone, age, pwd) {
        console.log(fullname, phone, age, pwd)
        await axios({
            method: "put",
            url: "http://127.0.0.1:8000/employees/update-employee",
            body: JSON.stringify({
                FullName: formValues.fullName || fullname,
                Phone: formValues.phone || phone,
                Password: formValues.pwd || pwd,
                Age: parseInt(formValues.age || age)
            }),
            headers: {
                accept: 'application/json',
                'authorization-token': localStorage.getItem('token'),
                'access-control-allow-credentials': true


            }
        })
            .then(function (response) {
                // window.location.reload();
                console.log(response);
            })

            .catch(function (response) {
                //handle error
                console.log(response);
            });


    }
    const [modalShowAddStaff, setModalShowAddStaff] = useState({ show: false, productID: '' });
    return (
        // localStorage.getItem('Username')!=='admin' ? alert('Xin lỗi! Chức năng chỉ dành cho admin'):(
        <div>
            <SideBar
                setSideNavExpanded={setSideNavExpanded}
                sideNavExpanded={sideNavExpanded}
            />
            <div style={contentStyle}>
        <div className="content-staff container-fluid" style={{ paddingLeft: "0" }}>
            <div className="col-md" style={{ paddingLeft: "0" }}><Header title="Nhân viên" />
                <div >
                    <div className="row">
                        <div className="title text-center col-md-11" style={{ paddingTop: "10px" }}>Nhân viên</div>
                        <div className="d-flex btn col-md gap-4 nowrap p-3 round-3 justify-content-start">
                            <button className="btn btn-primary btn-lg p-2 round-3" onClick={() => setModalShowAddStaff({ show: true, productID: '' })} >Thêm</button>
                            <ModalAddStaff show={modalShowAddStaff.show} onHide={() => setModalShowAddStaff(false)} />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-start">
                        <table className="table  col-md table-content" style={{ width: '100%' }} >
                            <thead>
                                <tr className="text-center">
                                    <th>Username</th>
                                    <th>Mật khẩu </th>
                                    <th>Tên nhân viên</th>
                                    <th>Tuổi </th>
                                    <th>Số điện thoại </th>
                                    <th>Email</th>
                                    <th>Cập nhật</th>
                                </tr>
                            </thead>
                            <tbody>
                                {staffs.map((staff, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{staff.Username}</td>
                                            <td><input className="form-control-lg input-items_staff border" defaultValue={staff.Password} onChange={handleChange} name="pwd" /></td>
                                            <td><input className="form-control-lg input-items_staff border" defaultValue={staff.FullName} onChange={handleChange} name="fullname" /></td>
                                            <td><input className="form-control-lg input-items_staff border" defaultValue={staff.Age} onChange={handleChange} name="age" /></td>
                                            <td><input className="form-control-lg input-items_staff border" defaultValue={staff.Phone} onChange={handleChange} name="phone" /></td>
                                            <td>{staff.Email}</td>
                                            <td className="text-center p-0"  >
                                                <button className="btn btn-lg" 
                                                    onClick={() =>updateStaff(staff.FullName, staff.Phone, staff.Age, staff.Password)}
                                                >
                                                    <i className="fa fa-check" style={{fontSize:"25px", fontWeight:"bold"}}></i>
                                                </button>
                                                <button className="btn btn-lg" onClick={() => removeData(staff.Username)}>
                                                    <i className="fa fa-delete-left" ></i>
                                                </button>

                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div></div>
    )
}
export default Staff;