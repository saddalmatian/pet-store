import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from 'react';
import './ModalEdit.css'
import axios from 'axios';



function ModalEdit(props) {
    const { products } = props
    console.log(products)
    const initValues = {
        productName: '',
        productType: '',
        productCost: '',
        productQuantity: '',
        productDes: '',
        productOriginPrice: '',
        brandName: '',
        imageList: [],
        petTypeName: '',
        productDateIn: '',
        productDateOut: ''
    }
    const petName = ['Dog', 'Cat', 'Bird']
    //preview image before upload
    const [imageURL, setImageURL] = useState(null);
    const [image, setImg] = useState(null);
    const changeHandler = e => {
        setImageURL(URL.createObjectURL(e.target.files[0]));
        setImg(e.target.files[0]);
    }
    const [imageURL2, setImageURL2] = useState(null);
    const [image2, setImg2] = useState(null);
    const changeHandler2 = e => {
        setImageURL2(URL.createObjectURL(e.target.files[0]));
        setImg2(e.target.files[0]);
    }
    const [imageURL3, setImageURL3] = useState(null);
    const [image3, setImg3] = useState(null);
    const changeHandler3 = e => {
        setImageURL3(URL.createObjectURL(e.target.files[0]));
        setImg3(e.target.files[0]);
    }


    const removeImgPreview = () => {
        setImageURL(null);
        setImageURL2(null);
        setImageURL3(null);
        props.onHide();

    }
    const [formValues, setFormValues] = useState(initValues);
    const handleChange = e => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }



    formValues.imageList = [image, image2, image3];
    console.log(typeof formValues.imageList)
    async function handleSubmit(e) {
        e.preventDefault();
        var bodyFormData = new FormData();
        formValues.imageList.forEach(item => {
            bodyFormData.append('image_list', item);
            console.log(item)
        })
        bodyFormData.append('product_quantity', parseInt(formValues.productQuantity) || parseInt(products?.ProductQuantity))
        bodyFormData.append('product_name', formValues.productName || products?.ProductName)
        bodyFormData.append('product_description', formValues.productDes || products?.ProductDescription)
        bodyFormData.append('product_cost', parseInt(formValues.productCost) || parseInt(products?.ProductCost))
        bodyFormData.append('product_type', formValues.productType || products?.ProductType)
        bodyFormData.append('pet_type_name', formValues.petTypeName || products?.PetTypeName)
        bodyFormData.append('brand_name', formValues.brandName || products?.BrandName)
        bodyFormData.append('product_original_cost', parseInt(formValues.productOriginPrice || parseInt(products?.ProductOriginalCost)))
        bodyFormData.append('product_date_in', formValues.productDateIn || products?.ProductDateIn)
        bodyFormData.append('product_date_out', formValues.productDateOut || products?.ProductDateOut)
        bodyFormData.append('product_id', products?.ProductID)

        var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6Im5oYW52aWVuMSIsImV4cCI6MTY0OTY2MTk5N30.yx2vaDdKKvGSIRppgk2S0OU_GDL4SG_0yENPOxRUBA8'
        await axios({
            method: "put",
            url: "http://127.0.0.1:8000/product/update-product",
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
            onHide={removeImgPreview}


        >
            <Modal.Header closeButton >

                <Modal.Title >
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>



                <form onSubmit={handleSubmit}>

                    <div className="modal-content form-group d-flex row border-0 gap-4 ">
                        <div className="d-flex">
                            <label htmlFor="product-id" className="label-items">Product ID</label>
                            <label className="form-control-lg input-items product-id"  >{products?.ProductID}</label>
                        </div>
                        <div className="d-flex">
                            <label htmlFor="product-name" className="label-items">Product Name</label>
                            <input type="text" className="form-control-lg border input-items product-name " name="productName" onChange={handleChange} defaultValue={products?.ProductName} required />
                        </div>
                        <div className="d-flex gap-4">
                            <label htmlFor="product-img" className="label-items">Current Image</label>
                            {products?.ListImages.map((img,index)=>(
                                  <img key={index} src={img.ImageSource} style={{ width: '80px', height: '80px' }} />
                            ))}
                            {/* <img src={products?.ListImages[0].ImageSource} style={{ width: '80px', height: '80px' }} />
                            <img src={products?.ListImages[1].ImageSource} style={{ width: '80px', height: '80px' }} />
                            <img src={products?.ListImages[2].ImageSource} style={{ width: '80px', height: '80px' }} /> */}
                        </div>
                        <div className="d-flex" >
                            <label htmlFor="product-img" className="label-items">Upload image</label>
                            <div className="row gap-3 ">

                                <div className="col-md border">
                                    <label htmlFor="product-img" className="label-items ">Image 1</label>
                                    <div className="text-center"><img src={imageURL && imageURL} style={{ width: '100%', height: '100%' }} /></div>
                                    <input type="file" className="form-control-file form-control-sm input-items" onChange={changeHandler} alt="no pic" />

                                </div>

                                <div className="col-md border">
                                    <label htmlFor="product-img" className="label-items ">Image 2</label>
                                    <div className="text-center"><img src={imageURL2 && imageURL2} style={{ width: '100%', height: '100%' }} /></div>
                                    <input type="file" className="form-control-file form-control-sm input-items" onChange={changeHandler2} alt="no pic" />

                                </div>
                                <div className="col-md border">
                                    <label htmlFor="product-img" className="label-items ">Image 3</label>
                                    <div className="text-center"><img src={imageURL3 && imageURL3} style={{ width: '100%', height: '100%' }} /></div>
                                    <input type="file" className="form-control-file form-control-sm input-items" onChange={changeHandler3} alt="no pic" />

                                </div>

                            </div>
                        </div>

                        <div className="d-flex">
                            <label htmlFor="product-cost" className="label-items">Product Cost (VND)</label>
                            <input type="text" className="form-control-lg border input-items product-cost " name="productCost" onChange={handleChange} defaultValue={products?.ProductCost} required />
                        </div>
                        <div className="d-flex">
                            <label htmlFor="product-cost" className="label-items">Original Cost (VND)</label>
                            <input type="text" className="form-control-lg border input-items product-cost " name="productOriginPrice" onChange={handleChange} defaultValue={products?.ProductOriginalCost} required />
                        </div>
                        <div className="d-flex">
                            <label htmlFor="product-quantity" className="label-items">Product Quantity</label>
                            <input type="number" className="form-control-lg border  product-quantity input-items" name="productQuantity" onChange={handleChange} defaultValue={products?.ProductQuantity} required />


                        </div>
                        <div className="d-flex">
                            <label htmlFor="product-rate" className="label-items">Rated</label>
                            <span className="form-control-lg producst-rate input-item">{products?.RateStarNumber}<i className="fa fa-star text-warning"></i></span>

                        </div>
                        <div className="d-flex">
                            <label htmlFor="product-pet-type" className="label-items">Brand Name</label>
                            <input type="text" className="form-control-lg border input-items product-pet-type" name="brandName" defaultValue={products?.BrandName} onChange={handleChange} required />
                        </div>
                        <div className="d-flex">
                            <label htmlFor="product-type" className="label-items">Product type</label>
                            <input type="text" className="form-control-lg border input-items product-type" name="productType" defaultValue={products?.ProductType} onChange={handleChange} />
                        </div>
                        {/* <input type="file" className="form-control-lg border input-items"/>*/}
                        <div className="d-flex">
                            <label htmlFor="product-type" className="label-items">Pet type</label>
                            <select className="form-control-lg border input-items option-type" name="petTypeName" defaultValue={formValues.petTypeName} onChange={handleChange}>

                                {petName.map((a, index) => {
                                    if (products?.PetTypeName === a) {
                                        return (
                                            <option value={a} selected key={index}>{a}</option>
                                        )
                                    } else {
                                        return (
                                            <option value={a} key={index}>{a}</option>
                                        )
                                    }
                                })}
                            </select>


                        </div>
                        <div className="d-flex">
                            <label htmlFor="product-date-in" className="label-items">Date in</label>
                            <input type="date" className="form-control-lg border input-items" name="productDateIn" defaultValue={products?.ProductDateIn} onChange={handleChange} />
                        </div>
                        <div className="d-flex">
                            <label htmlFor="product-date-out" className="label-items">Date out</label>
                            <input type="date" name="productDateOut" className="form-control-lg border input-items" defaultValue={products?.ProductDateOut} onChange={handleChange} />
                        </div>
                        <div className="d-flex">
                            <label htmlFor="product-desc" className="label-items">Product Description</label>
                            <textarea className="form-control-lg border input-items product-desc" name="productDes" defaultValue={products?.ProductDescription} onChange={handleChange} required></textarea>
                        </div>
                        <div className="d-flex text-center justify-content-end gap-5">
                            <button className="btn btn-lg btn-primary" type="submit">Update</button>
                            <button className="btn btn-lg btn-warning" onClick={removeImgPreview}>Close</button>
                        </div>
                    </div>


                </form>


            </Modal.Body>

        </Modal>
    )
}
export default ModalEdit;