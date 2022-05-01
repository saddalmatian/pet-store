import React, { useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import axios from 'axios';


function ModalUpdatePromo(props) {
    const { promos } = props
    console.log(props.promo)
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

    const a = options.map(option => ({ ProductID: option }));
    const b = props.promo && props.promo?.ListProducts.map((id) => ({ ProductID: id.product_id }))
    console.log(b)
    async function handleSubmit(e) {
        e.preventDefault();
        var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjQ5NjA1MDU1fQ.jCLyuBjtSZ97xFTT_iWC6uzHx_Zr0zHArhz67XetxSU'
        await axios({
            method: "put",
            url: "http://127.0.0.1:8000/promotionals/update-promotional",
            data: ({
                PromotionalID: props.promo.Promotional.promotional_id,
                PromotionalEndDate: formValues.promoEndDate || props.promo?.Promotional.promotional_end_date,
                PromotionalStartDate: formValues.promoStartDate || props.promo?.Promotional.promotional_start_date,
                PromotionalSale: parseInt(formValues.promoSale) || parseInt(props.promo?.Promotional.promotional_sale),
                PromotionalDesc: formValues.promoDesc || props.promo?.Promotional.promotional_description,
                PromotionalName: formValues.promoName || props.promo?.Promotional.promotional_name,
                ListProductIds: a.length > 0 ? a : b
            }),
            headers: {
                accept: 'application/json',
                'authorization-token': token,

            }
        }).then(function (response) {
            window.location.reload();
            alert("Cập nhật thành công")
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

    // const [listCheck, setListCheck] = useState([]);


    // console.log(listCheck);

    return (
        <Modal {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"

        >
            <Modal.Header closeButton>
                <Modal.Title >
                    Cập nhật khuyến mãi
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="modal-content form-group d-flex row border-0 gap-4 ">
                        <div className="d-flex">
                            <label className="label-items_promo">Ngày bắt đầu</label>
                            <input className="form-control-lg input-items_promo border" type="date" defaultValue={props.promo?.Promotional.promotional_start_date} required onChange={(e) => handleChange(e)} name="promoStartDate" />
                            {/* {console.log(props.promo.Promotional.promotional_start_date)} */}
                        </div>
                        <div className="d-flex">
                            <label className="label-items_promo">Ngày kết thúc</label>
                            <input className="form-control-lg input-items_promo border" type="date" defaultValue={props.promo?.Promotional.promotional_end_date} required onChange={(e) => handleChange(e)} name="promoEndDate" />

                        </div>
                        <div className="d-flex">
                            <label className="label-items_promo">Tên khuyến mãi</label>
                            <input className="form-control-lg input-items_promo border" type="text" defaultValue={props.promo?.Promotional.promotional_name} required onChange={(e) => handleChange(e)} name="promoName" />

                        </div>
                        <div className="d-flex">
                            <label className="label-items_promo">Phần trăm</label>
                            <input type="text" className="form-control-lg input-items_promo border" defaultValue={props.promo?.Promotional.promotional_sale} required onChange={(e) => handleChange(e)} name="promoSale" />

                        </div>

                        <div className="d-flex">
                            <label className="label-items_promo">Mô tả</label>
                            <input className="form-control-lg input-items_promo border" defaultValue={props.promo?.Promotional.promotional_description} required onChange={(e) => handleChange(e)} name="promoDesc" />

                        </div>
                        <div className="d-flex">
                            <label className="label-items_promo">Danh sách sản phẩm</label>
                            <select className="form-control-lg border input-items_promo option-type" name="listProduct" required onChange={(e) => handleChangeSelect(e)} multiple>
                                {
                                    products.map(a => {
                                        var checkP = false;
                                        props.promo && props.promo.ListProducts.map(product => {
                                            if (product.product_id == a.ProductID) {
                                                checkP = true;
                                            }
                                        })

                                        if (checkP) {
                                            return <option value={a.ProductID} selected key={a.ProductID}>{a.ProductName}</option>
                                        } else {
                                            return <option value={a.ProductID} key={a.ProductID}>{a.ProductName}</option>
                                        }
                                    })
                                }
                            </select>

                        </div>

                        <button className="btn btn-lg btn-primary" type="submit" >Save</button>
                        <button className="btn btn-lg btn-warning " onClick={props.onHide}>Cancel</button>


                    </div>

                </form>
            </Modal.Body>
            {/* <Modal.Footer>
            
        </Modal.Footer> */}
        </Modal>
    );

}
export default ModalUpdatePromo;