import React, { useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import axios from 'axios';


function ModalAddStaff(props) {

    const initValues = {
        userName: '',
        fullName: '',
        phone: '',
        email: '',
        age: '',
        pwd: ''
    }
    const [formValues, setFormValues] = useState(initValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }


    async function handleSubmit(e) {
        e.preventDefault();
        setFormErrors(validate(formValues));
        props.onHide();
        window.location.reload();
    }
    //api function
    var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjQ5NjA1MDU1fQ.jCLyuBjtSZ97xFTT_iWC6uzHx_Zr0zHArhz67XetxSU'
    useEffect(() => {
        if (Object.keys(formErrors).length === 0) {
            try {
                const response = axios.post('http://127.0.0.1:8000/employees/sign-up',
                    JSON.stringify({
                        FullName: formValues.fullName,
                        Phone: formValues.phone,
                        Email: formValues.email,
                        Username: formValues.userName,
                        Password: formValues.pwd,
                        Age: parseInt(formValues.age)
                    }),
                    {
                        headers: { 'Content-Type': 'application/json', 'authorization-token': token, },
                        withCredentials: true
                    }
                ).catch(function (err) {
                    if (!err?.response) {
                        setFormErrors({
                            server: 'Máy chủ hiện không phản hồi'
                        })
                    } else if (err.response?.status === 400) {
                        setFormErrors({
                            username: 'Tên tài khoản này đã tồn tại'
                        })
                    } else {
                        setFormErrors({
                            server: 'Đăng ký không thành công'
                        })
                    }
                });
                console.log(formValues);
                console.log(response.data);
                console.log(response.accessToken);
                console.log(JSON.stringify(response));
            } catch (err) {
                console.log(JSON.stringify(err, null, 2));
            }
        }
    }, [formErrors]);

    //check validate
    const validate = (values) => {
        const errors = {};
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if (!values.fullName.trim()) {
            errors.fullName = "Họ và tên không được để trống"
        }

        if (!values.email) {
            errors.email = "Email không được để trống"
        } else if (!regex.test(values.email)) {
            errors.email = "Email không hợp lệ"
        }

        if (!values.phone) {
            errors.phone = "Số điện thoại không được để trống"
        } else if (!values.phone.match("^\\d{10}$")) {
            errors.phone = "Số điện thoại không hợp lệ"
        }

        if (!values.userName.trim()) {
            errors.userName = "Tên đăng nhập không được để trống"
        }

        if (!values.pwd) {
            errors.pwd = "Mật khẩu không được để trống"
        } else if (values.pwd.length < 6) {
            errors.pwd = "Mật khẩu phải chứa ít nhất 6 kí tự"
        }
        if (!values.age) {
            errors.age = "Mật khẩu không được để trống"
        } else if (!Number.isInteger(parseInt(values.age))) {
            errors.age = "Phai la so nguyen"
        }


        return errors;
    }

    return (
        <Modal {...props}
            size="lg"
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
                        <div className="d-flex">
                            <label className="label-items_staff">FullName</label>
                            <input className="form-control-lg input-items_staff border" value={formValues.fullName} onChange={handleChange} name="fullName" />
                            {formErrors.fullName && <p className='sign-up__error'>{formErrors.fullName}</p>}

                        </div>
                        <div className="d-flex">
                            <label className="label-items_staff">UserName</label>
                            <input className="form-control-lg input-items_staff border" value={formValues.userName} onChange={handleChange} name="userName" />
                            {formErrors.userName && <p className='sign-up__error'>{formErrors.userName}</p>}

                        </div>
                        <div className="d-flex">
                            <label className="label-items_staff">Password</label>
                            <input type="password" className="form-control-lg input-items_staff border" value={formValues.pwd} onChange={handleChange} name="pwd" />
                            {formErrors.pwd && <p className='sign-up__error'>{formErrors.pwd}</p>}

                        </div>

                        <div className="d-flex">
                            <label className="label-items_staff">Phone</label>
                            <input className="form-control-lg input-items_staff border" value={formValues.phone} onChange={handleChange} name="phone" />
                            {formErrors.phone && <p className='sign-up__error'>{formErrors.phone}</p>}

                        </div>
                        <div className="d-flex">
                            <label className="label-items_staff">Email</label>
                            <input type="email" className="form-control-lg input-items_staff border" value={formValues.email} onChange={handleChange} name="email" />
                            {formErrors.email && <p className='sign-up__error'>{formErrors.email}</p>}

                        </div>
                        <div className="d-flex">
                            <label className="label-items_staff">Age</label>
                            <input className="form-control-lg input-items_staff border" value={formValues.age} onChange={handleChange} name="age" />
                            {formErrors.age && <p className='sign-up__error'>{formErrors.age}</p>}

                        </div>

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
export default ModalAddStaff;