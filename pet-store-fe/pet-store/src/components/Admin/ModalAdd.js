import React, { useEffect, useState }from 'react';
import Modal from "react-bootstrap/Modal";
import axios from 'axios';


function ModalAdd (props){

    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.post('http://127.0.0.1:8000/product/create-product',
            {
                AuthorizationToken: ''
            },
            {
                headers: {
                    accept: 'application/json'
                }
            }
        )
        .then(res => {setProducts(res.data);
        console.log(res.data);})
        .catch(err => console.log(JSON.stringify(err, null, 2)))
    }, [])
    return(
        <Modal {...props}
            size="xl" 
            aria-labelledby="contained-modal-title-vcenter"
            
        >
            <Modal.Header closeButton>
                <Modal.Title >
                    Add Product
                </Modal.Title>
      </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="modal-content form-group d-flex row border-0 gap-4 ">
                         <input type="text" className="form-control-lg border " placeholder="Product name"/>
                         <input type="text" className="form-control-lg border" placeholder="Brand name"/>
                         <input type="text" className="form-control-lg border" placeholder="Quantity"/>
                         <input type="text" className="form-control-lg border" placeholder="Cost"/>
                         <input type="text" className="form-control-lg border" placeholder="Orginal cost"/>
                         <select className="form-control-lg border" >
                            <option value ='selected'>Choose pet type name...</option>
                            <option value="1">Bird</option>
                            <option value="2">Dog</option>
                            <option value="3">Cat</option>
                        </select>
                         <input type="text" className="form-control-lg border" placeholder="Product type"/>
                         Choose pic<input type="file" className="form-control-lg border" placeholder="Choose pic"/>
                         
                        <textarea className="form-control-lg border" placeholder="Enter your description..." ></textarea>
                        


                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button  className="btn btn-lg btn-primary"onClick={props.onHide}>Save</button>
                <button  className="btn btn-lg btn-warning "onClick={props.onHide}>Cancel</button>                
            </Modal.Footer>
            </Modal>
    );

}
export  default ModalAdd;