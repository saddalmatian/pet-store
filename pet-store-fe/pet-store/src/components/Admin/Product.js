import './Dashboard.css';
import ModalEdit from './ModalEdit';
import ModalAdd from './ModalAdd';
import ModalType from './ModalType';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./Header"
import SideBar from './Sidebar'
import Login from './SignIn'



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

    useEffect(async function () {
        await axios.get('http://127.0.0.1:8000/product/get-all-product-type',

            {
                headers: {
                    accept: 'application/json'
                }
            }
        )
            .then(res => setProductsTypes(res.data))
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }, [])
    console.log(productsTypes.length)

    const removeData = (id) => {
        axios.delete(`http://127.0.0.1:8000/product/delete-product?product_id=${id}`,
            {
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'authorization-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6Im5oYW52aWVuMSIsImV4cCI6MTY0OTY2MTk5N30.yx2vaDdKKvGSIRppgk2S0OU_GDL4SG_0yENPOxRUBA8',
                }
            }
        ).then(res => {
            const del = products.filter(product => id !== product.ProductID);
            setProducts(del);
            renderProduct();
        })
    }
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

    const renderProduct = () => {
        return products.map((product, index) => {
            return (
                <tr key={index}>
                    <td><img src={product.ImageSource} style={{ width: '20%', height: '20%' }} /> </td>
                    <td>{product.ProductName} </td>
                    <td>{product.ProductCost} </td>
                    <td className="text-center">
                        <button className="btn btn-lg" onClick={() => setModalShow({ show: true, productID: product.ProductID })}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="btn btn-lg" onClick={() => removeData(product.ProductID)}>
                            <i className="fa fa-delete-left" ></i>
                        </button>

                    </td>
                </tr>
            )
        })
    }
    const [details, setDetails] = useState();
    async function fetchData(product) {
        await axios.get(`http://127.0.0.1:8000/product/get-product-detail?product_id=${product}`,
            {
                headers: {
                    accept: 'application/json'
                }
            }
        )
            .then(res => {
                setDetails(res.data);
            })
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }

    const [modalShow, setModalShow] = useState({ show: false, productID: '' });
    const [modalShowAdd, setModalShowAdd] = useState({ show: false, productID: '' });
    const [modalType, setModalType] = useState({ show: false })
    return (
        !localStorage.getItem('token') ? <Login/>  : (
        <div>
        <SideBar
            setSideNavExpanded={setSideNavExpanded}
            sideNavExpanded={sideNavExpanded}
        />
        <div style={contentStyle}>
        <div className="content-dashboard container-fluid" style={{ paddingLeft: "0" }}>
            <div className="col-md" style={{ paddingLeft: "0" }}><Header title="Sản phẩm" />

            <ModalEdit products={details} show={modalShow.show} onHide={() => setModalShow({ show: false, productID: '' })} />
            {console.log(modalShow)}
            <div>
                <div className="title text-center" style={{ paddingTop: "10px" }}>Sản phẩm</div>
                <div className="d-flex btn col-md gap-4 p-3 round-3 justify-content-end">
                    <button className="btn btn-primary btn-lg p-3  round-3 " onClick={() => setModalShowAdd({ show: true, productID: '' })} >Thêm</button>
                    <ModalAdd show={modalShowAdd.show} onHide={() => setModalShowAdd(false)} />
                </div>
                <div className="row d-flex ">
                    <table className="table table-striped col-md table-content" style={{ width: '100%' }} >
                        <thead>
                            <tr className="text-center">
                                <th>Hình ảnh</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá</th>
                                <th>Cập nhật</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td style={{ width: '100px' }}><img src={product.ImageSource} style={{ width: '50px', height: '50px' }} /> </td>
                                        <td style={{ padding: '20px' }}>{product.ProductName} </td>
                                        <td style={{ padding: '20px' }}>{product.ProductCost} </td>
                                        <td className="text-center p-0"  >
                                            <button className="btn btn-lg" style={{ paddingTop: '20px' }} onClick={() => {
                                                setModalShow({ show: true, productID: product.ProductID });
                                                fetchData(product.ProductID)
                                            }}>
                                                <i className="fa fa-edit"></i>
                                            </button>
                                            <button className="btn btn-lg" style={{ paddingTop: '20px' }} onClick={() => removeData(product.ProductID)}>
                                                <i className="fa fa-delete-left" ></i>
                                            </button>

                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>

                <div className="title text-center" style={{ paddingTop: "10px" }}>Loại sản phẩm</div>
                <div className="d-flex btn col-md gap-4 p-3 round-3 justify-content-end">
                    <button className="btn btn-primary btn-lg p-3  round-3 " onClick={() => setModalType({ show: true })} >Thêm</button>
                    <ModalType show={modalType.show} onHide={() => setModalType(false)} />
                </div>
                <div className="row d-flex justify-content-start">
                    <table className="table col-md table-content" style={{ width: '100%' }} >
                        <thead>
                            <tr className="text-center">
                                <th>Tên con vật </th>
                                <th>Loại sản phẩm</th>
                            </tr>
                        </thead>
                        {/* {tbodies} */}
                        <tbody>
                            {productsTypes?.map((type) => (
                                type?.ListType.map((a, i) => {

                                    const petName = i=== 0 ? <td className="text-center" style={{padding: '30px 1rem'}} rowSpan={type.ListType.length} >{type.PetTypeName}</td>: null
                                    return(
                                    <tr key={i}>
                                        {petName}
                                        <td key={i} className="border" >{a.ProductType}</td>

                                    </tr>
                                )})
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
        </div></div> )
    )
}
export default Product;