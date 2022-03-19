import React from 'react';
function Staff(){

    return(
        <div className="content-staff container-fluid">
            <div className="title text-center"style={{paddingTop:"10px"}}>Nhân viên</div>
            <div className="row d-flex justify-content-start">
            <table className="table table-striped col-md table-content" style={{width: '100%'}} >
                <thead>
                    <tr  className= "text-center">
                        <th>ID</th>
                        <th>Tên nhân viên</th>
                        <th>Giờ làm</th>
                        <th>Chức vụ</th>
                        <th>Cập nhật</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>First Name</td>
                        <td>First Name</td>
                        <td>First Name</td>  
                        <td className="text-center">
                            <i className="fa fa-edit"></i>
                            <i className="fa fa-delete-left"style={{paddingLeft:"10px"}}></i>
                        </td>                     
                    </tr>
                    <tr>
                        <td>First Name</td>
                        <td>First Name</td>
                        <td>First Name</td>
                        <td>First Name</td>
                        <td className="text-center">
                            <i className="fa fa-edit"></i>
                            <i className="fa fa-delete-left"style={{paddingLeft:"10px"}}></i>
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>Email</td>
                        <td>Email</td>
                        <td>Email</td>
                        <td className="text-center">
                            <i className="fa fa-edit"></i>
                            <i className="fa fa-delete-left"style={{paddingLeft:"10px"}}></i>
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>Email</td>
                        <td>Email</td>
                        <td>Email</td>
                        <td className="text-center">
                            <i className="fa fa-edit"></i>
                            <i className="fa fa-delete-left"style={{paddingLeft:"10px"}}></i>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
    )
}
export default Staff;