import React, { useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import axios from 'axios';


function ModalType(props) {

    const initValues = {
        petTypeName: '',
        productType: '',
    }
    const [formValues, setFormValues] = useState(initValues);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6Im5oYW52aWVuMSIsImV4cCI6MTY0OTY2MTk5N30.yx2vaDdKKvGSIRppgk2S0OU_GDL4SG_0yENPOxRUBA8'
        await axios({
            method: "post",
            url: "http://127.0.0.1:8000/product/create-product-type",
            data: {
                'PetTypeName': formValues.petTypeName,
                'ProductType': formValues.productType
            },
            headers: {
                accept: 'application/json',
                'authorization-token': token,
                'Content-Type': 'application/json'
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
    console.log(formValues)


    return (
        <Modal {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"

        >
            <Modal.Header closeButton>
                <Modal.Title >
                Thêm loại sản phẩm
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="modal-content form-group d-flex row border-0 gap-4 ">
                        <input type="text" className="form-control-lg border" placeholder="Loại sản phẩm" name="productType" value={formValues.productType} onChange={handleChange} required />
                        <select className="form-control-lg border" name="petTypeName" value={formValues.petTypeName} onChange={handleChange}>
                            <option value="Chim" > Chim </option>
                            <option value="Chó" >Chó</option>
                            <option value="Mèo" >Mèo</option>
                        </select>
                        <button className="btn btn-lg btn-primary" type="submit" >Lưu </button>
                        <button className="btn btn-lg btn-warning " onClick={props.onHide}>Đóng</button>
                    </div>
                </form>
            </Modal.Body>

        </Modal>
    );

}
export default ModalType;