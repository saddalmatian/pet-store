import './Dashboard.css'
function Product() {
    return(
        <div className="content-dashboard container-fluid">
            <div className="title text-center"style={{paddingTop:"10px"}}>Sản phẩm</div>
            <div className="row d-flex justify-content-start">
            <table className="table table-striped col-md table-content" style={{width: '100%'}} >
                <thead>
                    <tr className="text-center">
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Loại</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Loại</th>
                        <th>Ngày xuất kho</th>
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
                        <td>First Name</td>
                        <td className="text-center">
                            <i className="fa fa-edit"></i>
                            <i className="fa fa-delete-left"style={{paddingLeft:"10px"}}></i>
                        </td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>Last Name</td>
                        <td>First Name</td>
                        <td>First Name</td>
                        <td>First Name</td>
                        <td>First Name</td>
                        <td>Last Name</td>
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
                        <td>Email</td>
                        <td>Email</td>
                        <td>Email</td>
                        <td className="text-center">
                            <i className="fa fa-edit"></i>
                            <i className="fa fa-delete-left "style={{paddingLeft:"10px"}}></i>
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>Email</td>
                        <td>Email</td>
                        <td>Email</td>
                        <td>Email</td>
                        <td>Email</td>
                        <td>Email</td>
                        <td className="text-center">
                            <i className="fa fa-edit"></i>
                            <i className="fa fa-delete-left" style={{paddingLeft:"10px"}}></i>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>

            <div className="title text-center"style={{paddingTop:"50px"}}>Loại sản phẩm</div>
            <div className="row d-flex justify-content-start">
            <table className="table table-striped col-md table-content" style={{width: '100%'}} >
                <thead>
                    <tr className="text-center">
                        <th>ID</th>
                        <th>Tên dịch vụ</th>
                        <th>Loại</th>
                        <th>Giá</th>
                        <th>Ngày bán</th>
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
                        <td className="text-center">
                            <i className="fa fa-edit"></i>
                            <i className="fa fa-delete-left"style={{paddingLeft:"10px"}}></i>
                        </td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>Last Name</td>
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
export default Product;