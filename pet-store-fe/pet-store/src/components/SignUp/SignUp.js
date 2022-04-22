import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import Heading from '../Heading';
import SignUpImg from '../../assets/images/SignUp1.jpg';
import axios from 'axios';

const SignUp = ({ submitForm }) => {

    const initValues = {
        fullname: "",
        email: "",
        phone: "",
        address: "",
        username: "",
        password: "",
        password2: ""
    };

    const [formValues, setFormValues] = useState(initValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitted(true);
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitted) {
            try {
                axios.post('http://127.0.0.1:8000/customers/sign-up',
                    JSON.stringify({
                        FullName: formValues.fullname,
                        Phone: formValues.phone,
                        Email: formValues.email,
                        Username: formValues.username,
                        Address: formValues.address,
                        Password: formValues.password
                    }),
                    {
                        headers: { 'Content-Type': 'application/json' },
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
            } catch (err) {
                console.log(JSON.stringify(err, null, 2));
            }
        }
    }, [formErrors, isSubmitted, formValues]);

    const validate = (values) => {
        const errors = {};
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if (!values.fullname.trim()) {
            errors.fullname = "Họ và tên không được để trống"
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

        if (!values.address) {
            errors.address = "Địa chỉ không được để trống"
        }

        if (!values.username.trim()) {
            errors.username = "Tên đăng nhập không được để trống"
        }

        if (!values.password) {
            errors.password = "Mật khẩu không được để trống"
        } else if (values.password.length < 6) {
            errors.password = "Mật khẩu phải chứa ít nhất 6 kí tự"
        }

        if (!values.password2) {
            errors.password2 = "Xác nhận mật khẩu không được để trống"
        } else if (values.password !== values.password2) {
            errors.password2 = "Mật khẩu xác nhận không trùng khớp"
        }

        return errors;
    }

    return (
        <div className="container sign-up__container">
            <div className="row">
                <Heading mixin="Become a member of Pet Store" title="Đăng ký" />
                <div className="col-md">
                    <img className="sign-up__img" src={SignUpImg} alt="Sign Up Img" />
                </div>

                {Object.keys(formErrors).length === 0 && isSubmitted ? (
                    <div className='col-md success'>
                        <h3>Đăng ký thành công!</h3>
                        <Link to="/sign_in"><p> Bạn có thể đăng nhập tại đây</p></Link>
                    </div>
                ) : (
                    <form className="col-md sign-up__form" onSubmit={handleSubmit}>
                        <p className="sign-up__label">Họ và tên (*)</p>
                        <input
                            id='fullname'
                            type="text"
                            className="sign-up__input"
                            name="fullname"
                            value={formValues.fullname}
                            onChange={handleChange}
                        />
                        {formErrors.fullname && <p className='sign-up__error'>{formErrors.fullname}</p>}

                        <p className="sign-up__label">Email (*)</p>
                        <input
                            id='email'
                            type="text"
                            className="sign-up__input"
                            name='email'
                            value={formValues.email}
                            onChange={handleChange}

                        />
                        {formErrors.email && <p className='sign-up__error'>{formErrors.email}</p>}


                        <p className="sign-up__label">Số điện thoại (*)</p>
                        <input
                            id='phone'
                            type="text"
                            className="sign-up__input"
                            name='phone'
                            value={formValues.phone}
                            onChange={handleChange}

                        />
                        {formErrors.phone && <p className='sign-up__error'>{formErrors.phone}</p>}

                        <p className="sign-up__label">Địa chỉ (*)</p>
                        <input
                            id='address'
                            type="text"
                            className="sign-up__input"
                            name='address'
                            value={formValues.address}
                            onChange={handleChange}

                        />
                        {formErrors.address && <p className='sign-up__error'>{formErrors.address}</p>}

                        <p className="sign-up__label">Tên đăng nhập (*)</p>
                        <input
                            id='username'
                            type="text"
                            className="sign-up__input"
                            name='username'
                            value={formValues.username}
                            onChange={handleChange}

                        />
                        {formErrors.username && <p className='sign-up__error'>{formErrors.username}</p>}

                        <p className="sign-up__label">Mật khẩu (*)</p>
                        <input
                            id='password'
                            type="password"
                            className="sign-up__input"
                            name='password'
                            value={formValues.password}
                            onChange={handleChange}

                        />
                        {formErrors.password && <p className='sign-up__error'>{formErrors.password}</p>}

                        <p className="sign-up__label">Xác nhận mật khẩu (*)</p>
                        <input
                            id='password2'
                            type="password"
                            className="sign-up__input"
                            name='password2'
                            value={formValues.password2}
                            onChange={handleChange}

                        />
                        {formErrors.password2 && <p className='sign-up__error'>{formErrors.password2}</p>}

                        <p className="sign-up__description">Nếu bạn đã có tài khoản, vui lòng chọn
                            <Link to="/sign_in"><span> Đăng nhập</span></Link>
                        </p>
                        <input type="submit" className="sign-up__btn" value="Đăng ký"></input>
                        {formErrors.server && <p className='sign-up__error'>{formErrors.server}</p>}
                    </form>
                )
                }
            </div>
        </div>
    );
}

export default SignUp;