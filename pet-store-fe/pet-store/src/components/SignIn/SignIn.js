import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import Heading from '../Heading';
import SignInImg from '../../assets/images/SignIn.jpg'

function SignIn() {
    return (
        <div className="container sign-in">
            <div className="row">
                <Heading mixin="Welcome to Pet Store" title="Đăng nhập" />
                <div className="col-md sign-in__form">
                    <p className="sign-in__label">Tên đăng nhập (*)</p>
                    <input type="text" className="sign-in__input"></input>
                    <p className="sign-in__label">Mật khẩu (*)</p>
                    <input type="text" className="sign-in__input"></input>
                    <p className="sign-in__description">Nếu bạn chưa có tài khoản, vui lòng chọn 
                        <Link to="/sign_up"><span>Đăng ký</span></Link>
                    </p>
                    <input type="button" className="sign-in__btn" value="Đăng nhập"></input>
                </div>

                <div className="col-md sign-in__image">
                    <img className="sign-in__img" src={SignInImg} alt="Sign In"></img>
                </div>
            </div>
        </div>
    );
}

export default SignIn;