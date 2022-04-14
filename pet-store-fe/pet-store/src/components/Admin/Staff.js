import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./Header"
import ModalAddStaff from "./ModalAddStaff"
function Staff() {
    const [staffs, setStaff] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/employees/get-all-employees',

            {
                headers: {
                    accept: 'application/json',
                    'authorization-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjQ5NjA1MDU1fQ.jCLyuBjtSZ97xFTT_iWC6uzHx_Zr0zHArhz67XetxSU'
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
                    'authorization-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjQ5NjA1MDU1fQ.jCLyuBjtSZ97xFTT_iWC6uzHx_Zr0zHArhz67XetxSU',
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
                        <button className="btn btn-lg"  onClick={() => removeData(staff.Username)}>
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
    async function updateStaff(fullname, phone, age,pwd){
        console.log(fullname, phone, age,pwd)
        await axios({
            method: "put",
            url: "http://127.0.0.1:8000/employees/update-employee",
            body: JSON.stringify({
                FullName: formValues.fullName||fullname,
                Phone: formValues.phone || phone,
                Password: formValues.pwd || pwd,
                Age: parseInt(formValues.age || age)
            }),
            headers: {
                accept: 'application/json',
                'authorization-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjQ5NjA1MDU1fQ.jCLyuBjtSZ97xFTT_iWC6uzHx_Zr0zHArhz67XetxSU',
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
    // const [modalShowStaff, setModalShowStaff] = useState({ show: false,  });
    return (
        <div className="content-staff container-fluid" style={{ paddingLeft: "0" }}>
            {/* <ModalEditStaff staffs={details} show={modalShowStaff.show} onHide={() => setModalShowStaff({ show: false, productID: '' })} /> */}
            <div className="col-md" style={{ paddingLeft: "0" }}><Header title="Nhân viên" /></div>
            <div style={{ marginLeft: "70px" }}>

                <div className="title text-center" style={{ paddingTop: "10px" }}>Nhân viên</div>
                <div className="d-flex btn col-md gap-4 p-3 round-3 justify-content-end">
                    <button className="btn btn-primary btn-lg p-3  round-3 " onClick={() => setModalShowAddStaff({ show: true, productID: '' })} >Add</button>
                    <ModalAddStaff show={modalShowAddStaff.show} onHide={() => setModalShowAddStaff(false)} />
                </div>
                <div className="row d-flex justify-content-start">
                    <table className="table  col-md table-content" style={{ width: '100%' }} >
                        <thead>
                            <tr className="text-center">
                                <th>Username</th>
                                <th>Password</th>
                                <th>Tên nhân viên</th>
                                <th>Tuoi</th>
                                <th>Sdt</th>
                                <th>Email</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staffs.map((staff, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{staff.Username}</td>
                                        <td><input type="text" className="form-control-lg" defaultValue={staff.Password} onChange={handleChange} name="pwd" /></td>
                                        <td><input type="text" className="form-control-lg" defaultValue={staff.FullName} onChange={handleChange} name="fullName" /></td>
                                        <td><input type="text" className="form-control-lg" defaultValue={staff.Age} onChange={handleChange} name="age" /></td>
                                        <td><input type="text" className="form-control-lg" defaultValue={staff.Phone} onChange={handleChange} name="phone" /></td>
                                        <td>{staff.Email}</td>
                                        <td className="text-center p-0"  >
                                            <button className="btn btn-lg" 
                                                 onClick={() =>updateStaff(staff.FullName, staff.Phone, staff.Age, staff.Password)}
                                              >
                                                <i className="fa fa-edit"></i>
                                            </button>
                                            <button className="btn btn-lg"  onClick={() => removeData(staff.Username)}>
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
    )
}
export default Staff;