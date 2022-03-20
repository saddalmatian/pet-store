import './Dashboard.css';
import ModalEdit from './ModalEdit';
import UseModal from './UseModal';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



function Product() {
    const {isShowing, toggle} = UseModal();
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

    const [productstype, setProductsType] = useState([]);
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
    console.log(products)
    const [modalShow, setModalShow] = useState(false);
    return(
        <div className="content-dashboard container-fluid">
            <div className="title text-center"style={{paddingTop:"10px"}}>Sản phẩm</div>
            <div className="row d-flex justify-content-start">
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
                                    <button className="btn btn-primary" onClick={() => setModalShow(true)}><i className="fa fa-edit"></i></button>
                                    <ModalEdit show={modalShow} onHide={() => setModalShow(false)}/>
                                    <i className="fa fa-delete-left"style={{paddingLeft:"10px"}}></i>
                                </td>
                            </tr>                            
                        )
                    })}
                   
                </tbody>
            </table>
            </div>

            <div className="title text-center"style={{paddingTop:"10px"}}>Sản phẩm</div>
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
    )
}
export default Product;