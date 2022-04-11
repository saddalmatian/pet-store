import React, { useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import axios from 'axios';


function ModalAdd(props) {

    const initValues = {
        productName: '',
        productType: '',
        productCost: '',
        productQuantity: '',
        productDes: '',
        productOriginPrice: '',
        brandName: '',
        image: '',
        petTypeName: ''
    }
    // const [selectOption, setSelectOption]=useState({value: ''})
    const [formValues, setFormValues] = useState(initValues);
    const [isSuccess, setSuccess] = useState(false);
    const [products, setProducts] = useState([]);
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
        setSuccess(true);
        console.log(formValues.image, formValues);
        var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6Im5oYW52aWVuMSIsImV4cCI6MTY0OTY2MTk5N30.yx2vaDdKKvGSIRppgk2S0OU_GDL4SG_0yENPOxRUBA8'
        await axios({
            method: "post",
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
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"

        >
            <Modal.Header closeButton>
                <Modal.Title >
                    Add Product
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="modal-content form-group d-flex row border-0 gap-4 ">
                        <input type="text" className="form-control-lg border" placeholder="Product name" name="productName" value={formValues.productName} onChange={handleChange} required />
                        {/* <input type="text" className="form-control-lg border" placeholder="Brand name" name="brandName" value={formValues.brandName} onChange={handleChange} /> */}
                        <select className="form-control-lg border" name="brandName" value={formValues.brandName} onChange={handleChange} >
                            <option value="BrandA" >Cho chos</option>
                            <option value="BrandB" >Cho meof</option>
                        </select>

                        <input type="text" className="form-control-lg border" placeholder="Quantity" name="productQuantity" value={formValues.productQuantity} onChange={handleChange} required />
                        <input type="text" className="form-control-lg border" placeholder="Cost" name="productCost" value={formValues.productCost} onChange={handleChange} required />
                        <input type="text" className="form-control-lg border" placeholder="Orginal cost" name="productOriginPrice" value={formValues.productOriginPrice} onChange={handleChange} required/>
                        <select className="form-control-lg border" name="petTypeName" value={formValues.petTypeName} onChange={handleChange}>
                            <option value="Bird" >Bird</option>
                            <option value="Dog" >Dog</option>
                            <option value="Cat" >Cat</option>
                        </select>

                        {/* <input type="text" className="form-control-lg border" name="petTypeName" value={formValues.petTypeName} onChange={handleChange}/> */}
                        <input type="text" className="form-control-lg border" placeholder="Product type" name="productType" value={formValues.productType} onChange={handleChange}required />
                        <input type="file" className="form-control-lg border" id="fileInput" name="image" onChange={handlePictureSelected} />

                        <textarea className="form-control-lg border" placeholder="Enter your description..." name="productDes" value={formValues.productDes} onChange={handleChange} required></textarea>
                        <button className="btn btn-lg btn-primary" type="submit" >Save</button>
                        <button className="btn btn-lg btn-warning " onClick={props.onHide}>Cancel</button>


                    </div>
                    {console.log(formValues.petTypeName)}
                </form>
            </Modal.Body>
            {/* <Modal.Footer>
            
        </Modal.Footer> */}
        </Modal>
    );

}
export default ModalAdd;