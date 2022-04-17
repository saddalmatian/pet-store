import React, { useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import axios from 'axios';


function ModalAddPromo(props) {

    const initValues = {
        promoStartDate: '',
        promoEndDate: '',
        promoSale: '',
        promoDesc: '',
        promoName: '',
        
    }
    const [formValues, setFormValues] = useState(initValues);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }
    console.log(formValues);

    const [options, setOptions] = useState([])
    const handleChangeSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value);
        setOptions(value);

    }

    const a =  options.map(option => ({ ProductID:option})) ;
    console.log(a)
    async function handleSubmit(e) {
        e.preventDefault();
        var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjQ5NjA1MDU1fQ.jCLyuBjtSZ97xFTT_iWC6uzHx_Zr0zHArhz67XetxSU'
        await axios({
            method: "post",
            url: "http://127.0.0.1:8000/promotionals/create-promotional",
            data: ({
                PromotionalEndDate: formValues.promoEndDate,
                PromotionalStartDate: formValues.promoStartDate,
                PromotionalSale: parseInt(formValues.promoSale),
                PromotionalDesc: formValues.promoDesc,
                PromotionalName: formValues.promoName,
                ListProductIds: a
            }),
            headers: {
                accept: 'application/json',
                'authorization-token': token,

            }
        }).then(function (response) {
            window.location.reload();
            props.onHide();
        })

            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
    //api function get product
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


    return (
        <Modal {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"

        >
            <Modal.Header closeButton>
                <Modal.Title >
                Thêm khuyến mãi
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="modal-content form-group d-flex row border-0 gap-4 ">
                        <div className="d-flex">
                            <label className="label-items_promo">Ngày bắt đầu</label>
                            <input className="form-control-lg input-items_promo border" type="date" value={formValues.promoStartDate} required onChange={(e) => handleChange(e)} name="promoStartDate" />

                        </div>
                        <div className="d-flex">
                            <label className="label-items_promo"> Ngày kết thúc </label>
                            <input className="form-control-lg input-items_promo border" type="date" value={formValues.promoEndDate} required onChange={(e) => handleChange(e)} name="promoEndDate" />

                        </div>
                        <div className="d-flex">
                            <label className="label-items_promo">Tên khuyến mãi </label>
                            <input className="form-control-lg input-items_promo border" type="text"value={formValues.promoName} required onChange={(e) => handleChange(e)} name="promoName" />

                        </div>
                        <div className="d-flex">
                            <label className="label-items_promo">Phần trăm giảm </label>
                            <input type="text" className="form-control-lg input-items_promo border" value={formValues.promoSale} required onChange={(e) => handleChange(e)} name="promoSale" />

                        </div>

                        <div className="d-flex">
                            <label className="label-items_promo">Mô tả </label>
                            <input className="form-control-lg input-items_promo border" value={formValues.promoDesc} required onChange={(e) => handleChange(e)} name="promoDesc" />

                        </div>
                        <div className="d-flex">
                            <label className="label-items_promo">Sản phẩm áp dụng</label>
                            <select className="form-control-lg border input-items_promo option-type" name="listProduct" required onChange={(e) => handleChangeSelect(e)} multiple>
                                {products.map((a, index) =>
                                    <option value={a.ProductID} key={index}>{a.ProductName}</option>
                                )}
                            </select>

                        </div>

                        <button className="btn btn-lg btn-primary" type="submit" >Lưu </button>
                        <button className="btn btn-lg btn-warning " onClick={props.onHide}>Đóng </button>


                    </div>

                </form>
            </Modal.Body>
            {/* <Modal.Footer>
            
        </Modal.Footer> */}
        </Modal>
    );

}
export default ModalAddPromo;