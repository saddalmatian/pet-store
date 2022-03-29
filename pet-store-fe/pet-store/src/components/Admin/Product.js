import './Dashboard.css';
import ModalEdit from './ModalEdit';
import ModalAdd from './ModalAdd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from"./Header"



function Product() {
  
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/product/get-all-products',
            {
                ProductTypeID: ''
            },
            {
                headers: {
                    accept: 'application/json'
                }
            }
        )
        .then(res => setProducts(res.data))
        .catch(err => console.log(JSON.stringify(err, null, 2)))
    }, [])

   
    const [modalShow, setModalShow] = useState({show: false, productID: ''});
    const [modalShowAdd, setModalShowAdd] = useState(false);
    return(
        <div className="content-dashboard container-fluid"style={{paddingLeft:"0"}}>
        <ModalEdit product={modalShow.productID} show={modalShow.show} onHide={() => setModalShow({show: false, productID: ''})}/>
{console.log(modalShow)}
        <div className="col-md" style={{paddingLeft:"0"}}><Header title="Dashboard" /></div>
        <div style={{marginLeft:"70px"}}>
            <div className="title text-center"style={{paddingTop:"10px"}}>Sản phẩm</div>
            <div className="d-flex btn col-md gap-4 p-3 round-3 justify-content-end">
                <button className="btn btn-danger btn-lg p-3  round-3" >Delete</button>

                <button className="btn btn-primary btn-lg p-3  round-3" onClick={() => setModalShowAdd(true)} >Add</button>
                <ModalAdd show={modalShowAdd} onHide={() => setModalShowAdd(false)}/>
            </div>
            <div className="row d-flex ">
            <table className="table table-striped col-md table-content" style={{width: '100%'}} >
                <thead>
                    <tr className="text-center">
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>{product.ProductID} </td>
                                <td>{product.ProductName} </td>
                                <td>{product.ProductCost} </td>
                                <td className="text-center">
                                    <button className="btn btn-primary" onClick={() => setModalShow({show: true, productID: product.ProductID})}>
                                       <i className="fa fa-edit"></i>
                                    </button>
                                    <i className="fa fa-delete-left"style={{paddingLeft:"10px"}}></i>
                                </td>
                            </tr>                            
                        )
                    })}
                   
                </tbody>
            </table>
            </div>

            <div className="title text-center"style={{paddingTop:"10px"}}>Sản phẩm type</div>
            <div className="row d-flex justify-content-start">
            <table className="table table-striped col-md table-content" style={{width: '100%'}} >
                <thead>
                    <tr className="text-center">
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>

                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>{product.ProductID} </td>
                                <td>{product.ProductName} </td>
                                <td>{product.ProductCost} </td>
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
export default Product;