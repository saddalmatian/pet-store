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
        imageList: [],
        petTypeName: '',
        productDateIn: '',
        productDateOut: ''
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
    console.log(formValues);
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



    console.log(typeof (formValues.image))
    async function handleSubmit(e) {
        e.preventDefault();
        var bodyFormData = new FormData();
        formValues.imageList = [image||null, image2||null, image3||null];
        formValues.imageList.forEach(item => {
            bodyFormData.append('image_list', item);
            console.log(item)
        })

        bodyFormData.append('product_quantity', parseInt(formValues.productQuantity))
        bodyFormData.append('product_name', formValues.productName)
        bodyFormData.append('product_description', formValues.productDes)
        bodyFormData.append('product_cost', parseInt(formValues.productCost))
        bodyFormData.append('product_type', formValues.productType)
        bodyFormData.append('pet_type_name', formValues.petTypeName)
        bodyFormData.append('brand_name', formValues.brandName)
        bodyFormData.append('product_original_cost', parseInt(formValues.productOriginPrice))
        bodyFormData.append('product_date_in', formValues.productDateIn)
        bodyFormData.append('product_date_out', formValues.productDateOut)
        setSuccess(true);
        console.log(formValues.petTypeName, formValues.brandName);
        var token = localStorage.getItem('token')
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
            alert("Thêm sản phẩm thành công")
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
            onHide={removeImgPreview}
        >
            <Modal.Header closeButton>
                <Modal.Title >
                    Thêm sản phẩm
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="modal-content form-group d-flex row border-0 gap-4 ">
                        <div className="d-flex">
                            <label className="label-items"> Tên sản phẩm</label>
                            <input type="text" className="form-control-lg  input-items border" name="productName" value={formValues.productName} onChange={handleChange} required />
                        </div>
                        {/* <input type="text" className="form-control-lg  input-items border" placeholder="Brand name" name="brandName" value={formValues.brandName} onChange={handleChange} /> */}
                        <div className="d-flex">
                            <label className="label-items">  Thương hiệu</label>
                            <select className="form-control-lg  input-items border" name="brandName" value={formValues.brandName} onChange={handleChange} >
                                <option>Chọn thương hiệu</option>
                                <option value="BrandA" >BrandA</option>
                                <option value="BrandB" >BrandB</option>
                            </select>
                        </div>
                        <div className="d-flex">
                            <label className="label-items">  Số lương</label>
                            <input type="text" className="form-control-lg  input-items border"  name="productQuantity" value={formValues.productQuantity} onChange={handleChange} required />
                        </div>
                        <div className="d-flex">
                            <label className="label-items"> Giá bán</label>
                            <input type="text" className="form-control-lg  input-items border"  name="productCost" value={formValues.productCost} onChange={handleChange} required />
                        </div>
                        <div className="d-flex">
                            <label className="label-items"> Giá nhập</label>
                            <input type="text" className="form-control-lg  input-items border" name="productOriginPrice" value={formValues.productOriginPrice} onChange={handleChange} required />
                        </div>
                        <div className="d-flex">
                            <label className="label-items"> Thú cưng </label>
                            <select className="form-control-lg  input-items border" name="petTypeName" value={formValues.petTypeName} onChange={handleChange}>
                                <option>Chọn loại thú cưng</option>
                                <option value="Chim" >Chim</option>
                                <option value="Chó" >Chó</option>
                                <option value="Mèo" >Mèo</option>
                            </select>
                        </div>

                        {/* <input type="text" className="form-control-lg border" name="petTypeName" value={formValues.petTypeName} onChange={handleChange}/> */}
                        <div className="d-flex">
                            <label className="label-items"> Loại sản phẩm</label>
                        <input type="text" className="form-control-lg input-items border" name="productType"  value={formValues.productType} onChange={handleChange} required />
                        </div>
                        {/* <div className="d-flex">
                            <label className="label-items"> Tải lên hình </label>
                        <input type="file" className="form-control-lg input-items border" id="fileInput" name="image" onChange={handlePictureSelected} />
                        </div> */}
                        <div className="d-flex" >
                            <label htmlFor="product-img" className="label-items">Hình sản phẩm </label>
                            <div className="row gap-3 ">

                                <div className="col-md border">
                                    <label htmlFor="product-img" className="label-items ">Hình 1</label>
                                    <div className="text-center"><img src={imageURL && imageURL} style={{ width: '100%', height: '100%' }} /></div>
                                    <input type="file" className="form-control-file form-control-sm input-items" onChange={changeHandler} alt="no pic" />

                                </div>

                                <div className="col-md border">
                                    <label htmlFor="product-img" className="label-items ">Hình 2</label>
                                    <div className="text-center"><img src={imageURL2 && imageURL2} style={{ width: '100%', height: '100%' }} /></div>
                                    <input type="file" className="form-control-file form-control-sm input-items" onChange={changeHandler2} alt="no pic" />

                                </div>
                                <div className="col-md border">
                                    <label htmlFor="product-img" className="label-items ">Hình 3</label>
                                    <div className="text-center"><img src={imageURL3 && imageURL3} style={{ width: '100%', height: '100%' }} /></div>
                                    <input type="file" className="form-control-file form-control-sm input-items" onChange={changeHandler3} alt="no pic" />

                                </div>

                            </div>
                        </div>
                        <div className="d-flex">
                            <label htmlFor="product-date-in" className="label-items">Ngày nhập</label>
                            <input type="date" className="form-control-lg border input-items" name="productDateIn" value={formValues.productDateIn} onChange={handleChange} />
                        </div>
                        <div className="d-flex">
                            <label htmlFor="product-date-out" className="label-items">Hạn sử dụng</label>
                            <input type="date" name="productDateOut" className="form-control-lg border input-items" value={formValues.productDateOut} onChange={handleChange} />
                        </div>
                        <div className="d-flex">
                            <label className="label-items">Mô tả</label>
                        <textarea className="form-control-lg border input-items" placeholder="Enter your description..." name="productDes" value={formValues.productDes} onChange={handleChange} required></textarea>
                        </div>
                        <button className="btn btn-lg btn-primary" type="submit" > Lưu </button>
                        <button className="btn btn-lg btn-warning " onClick={props.onHide}>Đóng</button>


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