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
                
                <form>
                        <div className="modal-content form-group d-flex row border-0 gap-4 ">
                                 <input type="text" className="form-control-lg border " defaultValue={products?.ProductName}/>
                                <img src={products?.ListImages[0].ImageSource} style={{width: '5%', height: '5%'}}/>
                                <input type="text" className="form-control-lg border" defaultValue={`${products?.ProductCost} VND`}/>
                                <input type="text" className="form-control-lg border" defaultValue={products?.ProductQuantity}/>
                                <input type="text" className="form-control-lg border" defaultValue={products?.RateStarNumber}/>
                                <input type="file" className="form-control-lg border"/>
                                <select className="form-control-lg border" >
                                    <option value ="selected">Choose type...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <textarea className="form-control-lg border" defaultValue={products?.ProductDescription}></textarea> 
                                <select className="form-control-lg border" >
                                    <option value ="selected">Choose pet type...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                        </div>
                      
                    </form>
         
        </div>
   
            </Modal.Body>
            <Modal.Footer>
                <button  className="btn btn-lg btn-primary"onClick={props.onHide}>Close</button>
                
            </Modal.Footer>
        </Modal>
    )
}
export default ModalEdit;