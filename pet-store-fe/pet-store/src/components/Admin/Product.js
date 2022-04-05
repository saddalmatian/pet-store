import './Dashboard.css';
import ModalEdit from './ModalEdit';
import ModalAdd from './ModalAdd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./Header"



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
    }, []);

    const [productsTypes, setProductsTypes] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/product/get-all-product-type',

            {
                headers: {
                    accept: 'application/json'
                }
            }
        )
            .then(res => setProductsTypes(res.data))
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }, [])
    console.log(products)

    const removeData=(id)=>{
        axios.delete(`http://127.0.0.1:8000/product/delete-product?product_id=${id}`,
            {
                headers: {
                    accept: 'application/json',
                    authorizationToken: ''
                }
            }
        ).then(res =>{
            const del = products.filter(product =>id !== product.ProductID);
            setProducts(del);
            renderProduct();
        })
    }
    const renderProduct = () =>{
        return products.map((product, index) => {
            return (
                <tr key={index}>
                    <td><img src={product.ImageSource} style={{width: '20%', height: '20%'}}/> </td>
                    <td>{product.ProductName} </td>
                    <td>{product.ProductCost} </td>
                    <td className="text-center">
                        <button className="btn btn-lg" onClick={() => setModalShow({ show: true, productID: product.ProductID })}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="btn btn-lg"  onClick={() => removeData(product.ProductID)}>
                        <i className="fa fa-delete-left" ></i>
                        </button>
                        
                    </td>
                </tr>
            )
        })
    }

    const [modalShow, setModalShow] = useState({ show: false, productID: '' });
    const [modalShowAdd, setModalShowAdd] = useState({ show: false, productID: '' });
    return (
        <div className="content-dashboard container-fluid" style={{ paddingLeft: "0" }}>
            <ModalEdit product={modalShow.productID} show={modalShow.show} onHide={() => setModalShow({ show: false, productID: '' })} />
            {console.log(modalShow)}
            <div className="col-md" style={{ paddingLeft: "0" }}><Header title="Dashboard" /></div>
            <div style={{ marginLeft: "70px" }}>
                <div className="title text-center" style={{ paddingTop: "10px" }}>Sản phẩm</div>
                <div className="d-flex btn col-md gap-4 p-3 round-3 justify-content-end">
                    <button className="btn btn-primary btn-lg p-3  round-3 " onClick={() => setModalShowAdd({ show: true, productID: '' })} >Add</button>
                    <ModalAdd show={modalShowAdd.show} onHide={() => setModalShowAdd(false)} />
                </div>
                <div className="row d-flex ">
                    <table className="table table-striped col-md table-content" style={{ width: '100%' }} >
                        <thead>
                            <tr className="text-center">
                                <th>IMG</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td style={{width:'100px'}}><img src={product.ImageSource} style={{width: '50px', height: '50px'}}/> </td>
                                        <td style={{padding:'20px'}}>{product.ProductName} </td>
                                        <td style={{padding:'20px'}}>{product.ProductCost} </td>
                                        <td className="text-center p-0"  >
                                            <button className="btn btn-lg" style={{paddingTop:'20px'}} onClick={() => setModalShow({ show: true, productID: product.ProductID })}>
                                                <i className="fa fa-edit"></i>
                                            </button>
                                            <button className="btn btn-lg" style={{paddingTop:'20px'}} onClick={() => removeData(product.ProductID)}>
                                            <i className="fa fa-delete-left" ></i>
                                            </button>
                                            
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>

                <div className="title text-center" style={{ paddingTop: "10px" }}>Sản phẩm type</div>
                <div className="row d-flex justify-content-start">
                    <table className="table table-striped col-md table-content" style={{ width: '100%' }} >
                        <thead>
                            <tr className="text-center">
                                <th>Animal</th>
                                <th>Type</th>
                                <th>Update</th>
                               

                            </tr>
                        </thead>
                        <tbody>
                            {productsTypes.Listype && productsTypes.Listype?.map((type, index) => (
                                
                                    type.Bird.map((bird,index) => (
                                        <tr key={index}>
                                            <td className="text-center">Bird</td>
                                            <td key={index} className="text-center">{bird.ProductType}</td>
                                            <td className="text-center">
                                            <button className="btn btn-primary">
                                                <i className="fa fa-edit"></i>
                                            </button>
                                            <i className="fa fa-delete-left" style={{ paddingLeft: "10px" }}></i>
                                        </td>
                                        </tr>
                                    ))
                                    
                                
                            ))}
                            {productsTypes.Listype && productsTypes.Listype?.map((type, index) => (
                                
                                type.Dog.map((bird,index) => (
                                    <tr key={index}>
                                        <td className="text-center">Dog</td>
                                        <td key={index} className="text-center">{bird.ProductType}</td>
                                        <td className="text-center">
                                            <button className="btn btn-primary" >
                                                <i className="fa fa-edit"></i>
                                            </button>
                                            <i className="fa fa-delete-left" style={{ paddingLeft: "10px" }}></i>
                                        </td>
                                    </tr>
                                ))
                                
                            
                        ))}
                        {productsTypes.Listype && productsTypes.Listype?.map((type, index) => (
                                
                                type.Cat.map((bird,index) => (
                                    <tr key={index}>
                                        <td className="text-center">Cat</td>
                                        <td className="text-center" key={index}>{bird.ProductType}</td>
                                        <td className="text-center">
                                            <button className="btn btn-primary" >
                                                <i className="fa fa-edit"></i>
                                            </button>
                                            <i className="fa fa-delete-left" style={{ paddingLeft: "10px" }}></i>
                                        </td>
                                    </tr>
                                ))
                                
                            
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Product;