import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./Header"
function Staff(){
    const [staffs, setStaff] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/employees/get-all-employees',

            {
                headers: {
                    accept: 'application/json',
                    authorization_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjQ5NjA1MDU1fQ.jCLyuBjtSZ97xFTT_iWC6uzHx_Zr0zHArhz67XetxSU'
                }
            }
        )
            .then(res => setStaff(res.data))
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }, [])
    console.log(staffs)

    return(
        <div className="content-staff container-fluid"style={{paddingLeft:"0"}}>
        <div className="col-md" style={{paddingLeft:"0"}}><Header title="Nhân viên" /></div>
        <div style={{marginLeft:"70px"}}>

            <div className="title text-center"style={{paddingTop:"10px"}}>Nhân viên</div>
            <div className="row d-flex justify-content-start">
            <table className="table table-striped col-md table-content" style={{width: '100%'}} >
                <thead>
                    <tr  className= "text-center">
                        <th>Username</th>
                        <th>Tên nhân viên</th>
                        <th>Ma nha vien</th>
                        <th>Tuoi</th>
                        <th>Sdt</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {staffs.map((staff, index) =>{return(
                        <tr key={index}>
                            <td>{staff.Username}</td>
                            <td>{staff.FullName}</td>
                            <td>{staff.EmployeeId}</td>
                            <td>{staff.Age}</td>
                            <td>{staff.Phone}</td>
                            <td>{staff.Email}</td>
                            <td className="text-center">
                            <i className="fa fa-edit"></i>
                            <i className="fa fa-delete-left"style={{paddingLeft:"10px"}}></i>
                        </td>    
                        </tr>
                    )})}
                </tbody>
            </table>
            </div>
            </div>
            </div>
    )
}
export default Staff;