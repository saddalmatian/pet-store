import Modal from "react-bootstrap/Modal";
import React,{useState, useEffect} from 'react';
import './ModalEdit.css'
import axios from 'axios';
import {useParams} from 'react-router-dom'


function ModalEdit(props){
    const [products, setProducts] = useState(); 
    let {id}= useParams();
   
    useEffect(() => {
        async function fetchData(){
        await axios.get(`http://127.0.0.1:8000/product/get-product-detail?product_id=${props.product}`,
            {
                headers: {
                    accept: 'application/json'
                }
            }
        )
        .then(res => {setProducts(res.data);
        })
        .catch(err => console.log(JSON.stringify(err, null, 2)))
        }
        if(props.show){
            fetchData();
        }
    }, [props.show]);
    
    console.log(props.show);
    console.log(products);
    
   
    return (
        
        <Modal {...props}
            size="lg" 
            aria-labelledby="contained-modal-title-vcenter"
            
        >
            <Modal.Header closeButton>
                <Modal.Title >
                Modal heading
                </Modal.Title>
      </Modal.Header>
            <Modal.Body> 
               
            <div className="content-dashboard container-fluid">
                
                <form >
                        <div className="modal-content form-group d-flex row border-0 gap-4 ">
                            <div className="d-flex">
                            <label htmlFor="product-name" className="label-items">Product Name</label>
                                <input type="text" className="form-control-lg border input-items product-name "  defaultValue={products?.ProductName}/>
                            </div>
                            <div className="d-flex">
                                <div className="col-md">
                                    <label htmlFor="product-img" className="label-items">Image</label>
                                    <input type="file" className="form-control-lg border input-items"/>
                                </div>
                            </div>
                            <div className="d-flex gap-4">
                                <img src={products?.ListImages[0].ImageSource} style={{width: '80px', height: '80px', marginLeft:"120px"}}/>
                                <img src={products?.ListImages[0].ImageSource} style={{width: '80px', height: '80px'}}/>
                                <img src={products?.ListImages[0].ImageSource} style={{width: '80px', height: '80px'}}/>
                            </div>
                            <div className="d-flex">
                                <label htmlFor="product-cost" className="label-items">Product Cost</label>
                                <input type="text" className="form-control-lg border input-items product-cost"  defaultValue={`${products?.ProductCost} VND`}/>  
                            </div>
                            <div className="d-flex">
                                <label htmlFor="product-quantity" className="label-items">Product Quantity</label>
                                <input type="number" className="form-control-lg border  product-quantity" defaultValue={products?.ProductQuantity}/>


                            </div>
                            <div className="d-flex">
                                <label htmlFor="product-rate" className="label-items">Rated</label>
                                <span className="form-control-lg producst-rate input-item">{products?.RateStarNumber}<i className="fa fa-star text-warning"></i></span>

                            </div>
                            <div className="d-flex">
                                <label htmlFor="product-pet-type" className="label-items">Pet type</label>
                                <input type="text" className="form-control-lg border input-items product-pet-type" defaultValue={products?.PetTypeName}/>
                            </div>
                            <div className="d-flex">
                                <label htmlFor="product-type" className="label-items">Product type</label>
                                <input type="text" className="form-control-lg border input-items product-type" defaultValue={products?.ProductType}/>
                            </div>
                            {/* <input type="file" className="form-control-lg border input-items"/>
                            <select className="form-control-lg border input-items" >
                                <option value ="selected">Choose type...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> */}
                            <div className="d-flex">
                                <label htmlFor="product-desc" className="label-items">Product type</label>
                                <textarea className="form-control-lg border input-items product-desc" defaultValue={products?.ProductDescription}></textarea> 
                            </div>

                            {/* <select className="form-control-lg border" >
                                <option value ="selected">Choose pet type...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> */}
                        </div>
                      
                    </form>
         
        </div>
   
            </Modal.Body>
            <Modal.Footer>
                <button  className="btn btn-lg btn-primary"onClick={props.onHide}>Update</button>
                <button  className="btn btn-lg btn-secondary"onClick={props.onHide}>Close</button>
                
            </Modal.Footer>
        </Modal>
    )
}
export default ModalEdit;