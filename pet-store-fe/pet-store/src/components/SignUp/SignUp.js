import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import Heading from '../Heading';
import SignUpImg from '../../assets/images/SignUp1.jpg'

function SignUp() {
    return (
        <div className="container sign-up__container">
            <div className="row">
                <Heading mixin="Become a member of Pet Store" title="Đăng ký" />
                <div className="col-md">
                    <img className="sign-up__img" src={SignUpImg} alt="Sign Up Img" />            
                </div>

                <div className="col-md sign-up__form">
                    <p className="sign-up__label">Họ và tên (*)</p>
                    <input type="text" className="sign-up__input"></input>
                    <p className="sign-up__label">Email (*)</p>
                    <input type="text" className="sign-up__input"></input>
                    <p className="sign-up__label">Số điện thoại (*)</p>
                    <input type="text" className="sign-up__input"></input>
                    <p className="sign-up__label">Địa chỉ (*)</p>
                    <input type="text" className="sign-up__input"></input>
                    <p className="sign-up__label">Tên đăng nhập (*)</p>
                    <input type="text" className="sign-up__input"></input>
                    <p className="sign-up__label">Mật khẩu (*)</p>
                    <input type="text" className="sign-up__input"></input>
                    <p className="sign-up__label">Xác nhận mật khẩu (*)</p>
                    <input type="text" className="sign-up__input"></input>
                    <p className="sign-up__description">Nếu bạn đã có tài khoản, vui lòng chọn <Link to="/sign_in"><span>Đăng nhập</span></Link></p>
                    <input type="button" className="sign-up__btn" value="Đăng ký"></input>
                </div>
            </div>
        </div>
    );
}

export default SignUp;