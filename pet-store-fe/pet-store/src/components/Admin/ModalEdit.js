import Modal from "react-bootstrap/Modal";
import React,{useState, useEffect} from 'react';
import './ModalEdit.css'
import axios from 'axios';



function ModalEdit( props){
   const {products} = props
   console.log(products)
    const initValues = {
        productName: '',
        productType: '',
        productCost: '',
        productQuantity: '',
        productDes: '',
        productOriginPrice: '',
        brandName: '',
        imageList: '',
        petTypeName: '',
        productDateIn:'',
        productDateOut:'',
        productID: ''

    }
    // const [selectOption, setSelectOption]=useState({value: ''})
    const [formValues, setFormValues] = useState(initValues);

    const [pic, setPic] = useState(null)
    function handlePictureSelected(event) {
        setPic(event.target.files[0]);

    }
    const handleChange = e => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }



    console.log(typeof (formValues.image))
    async function handleSubmit(e) {
        e.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.append('image_display', pic);
        bodyFormData.append('product_quantity', parseInt(formValues.productQuantity))
        bodyFormData.append('product_name', formValues.productName)
        bodyFormData.append('product_description', formValues.productDes)
        bodyFormData.append('product_cost', parseInt(formValues.productCost))
        bodyFormData.append('product_type', formValues.productType)
        bodyFormData.append('pet_type_name', formValues.petTypeName)
        bodyFormData.append('brand_name', formValues.brandName)
        bodyFormData.append('product_original_cost', parseInt(formValues.productOriginPrice))
  
        var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6Im5oYW52aWVuMSIsImV4cCI6MTY0OTY2MTk5N30.yx2vaDdKKvGSIRppgk2S0OU_GDL4SG_0yENPOxRUBA8'
        await axios({
            method: "put",
            url: "http://127.0.0.1:8000/product/create-product",
            data: bodyFormData,
            headers: {
                accept: 'application/json',
                'authorization-token': token,
                'Content-Type': 'multipart/form-data'
            }
        }).then(function (response) {
            window.location.reload();
        })

            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
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
                                <label htmlFor="product-cost" className="label-items">Product Cost (VND)</label>
                                <input type="text" className="form-control-lg border input-items product-cost"  defaultValue={products && products?.ProductCost}/>  
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
                            {/* <input type="file" className="form-control-lg border input-items"/>*/}
                            <div className="d-flex">
                            <label htmlFor="product-type" className="label-items">Product type</label>
                            <select className="form-control-lg border input-items option-type" name="petTypeName" value ={formValues.petTypeName} onChange={handleChange}>
                                <option value="cat">Cat</option>
                                <option value="dog">Dog</option>
                                <option value="bird">Bird</option>
                            </select> 
                            </div>
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