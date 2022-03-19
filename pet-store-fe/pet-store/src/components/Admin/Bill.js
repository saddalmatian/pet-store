import React from 'react';
function Bill(){

    return(
        <div className="content-bill container-fluid">
            <div className="title text-center"style={{paddingTop:"10px"}}>Đơn hàng</div>
            <div className="row d-flex justify-content-start">
            <table className="table table-striped col-md table-content" style={{width: '100%'}} >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên khách hàng</th>
                        <th>Tình trạng</th>
                        <th>Ngày mua</th>
                        <th>Nhân viên nhận đơn</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>First Name</td>
                        <td>
                            <select className="status">
                                <option value="done">Thành công</option>
                                <option value="process">Đang xử lý</option>
                                <option value="delivery">Vận chuyển</option>
                            </select>
                        </td>
                        <td>First Name</td>
                        <td>First Name</td>
                                               
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>Last Name</td>
                        <td>
                            <select className="status">
                                <option value="done">Thành công</option>
                                <option value="process">Đang xử lý</option>
                                <option value="delivery">Vận chuyển</option>
                            </select>
                        </td>
                        <td>First Name</td>
                        <td>First Name</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>Email</td>
                        <td>
                            <select className="status">
                                <option value="done">Thành công</option>
                                <option value="process">Đang xử lý</option>
                                <option value="delivery">Vận chuyển</option>
                            </select>
                        </td>
                        <td>Email</td>
                        <td>Email</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>Email</td>
                        <td>
                            <select className="status">
                                <option value="done">Thành công</option>
                                <option value="process">Đang xử lý</option>
                                <option value="delivery">Vận chuyển</option>
                            </select>
                        </td>
                        <td>Email</td>
                        <td>Email</td>
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
    )
}
export default Bill;