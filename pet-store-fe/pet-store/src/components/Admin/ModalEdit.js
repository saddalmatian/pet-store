import Modal from "react-bootstrap/Modal";
import React,{useState, useEffect} from 'react';
import './ModalEdit.css'
import axios from 'axios';


function ModalEdit(props){

    const [products, setProducts] = useState([]);
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

    return (
        <Modal {...props}
            size="xl" 
            aria-labelledby="contained-modal-title-vcenter"
            
        >
            <Modal.Header closeButton>
                <Modal.Title >
                Modal heading
                </Modal.Title>
      </Modal.Header>
            <Modal.Body>
            <div className="content-dashboard container-fluid">
    
            <div className="row d-flex justify-content-start">
            <table className="table table-striped col-md table-content" style={{width: '100%'}} >
                <thead>
                    <tr className="text-center">
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Image</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>{product.ProductID} </td>
                                <td>{product.ProductName} </td>
                                <td>{product.ProductCost} </td>
                                <td className="text-center "><img src={product.ImageSource} style={{width:'5%', height:'5%'}}/></td>
                             
                            </tr>                            
                        )
                    })}
                   
                </tbody>
            </table>
            </div>
        </div>
            </Modal.Body>
            <Modal.Footer>
                <button  className="btn btn-lg btn-primary"onClick={props.onHide}>Close</button>
                
            </Modal.Footer>
        </Modal>
    )
}
export default ModalEdit;