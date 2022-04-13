import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import Heading from '../Heading';
import SignInImg from '../../assets/images/SignIn.jpg';
import axios from 'axios';


function SignIn() {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    // useEffect(() => {
    //     // window.location.reload();
    //     console.log(user);
    // }, [user]);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.append('username', user);
        bodyFormData.append('password', pwd);

        await axios({
            method: "post",
            url: "http://127.0.0.1:8000/customers/sign-in",
            data: bodyFormData,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
            .then(function (response) {
                //handle success
                setSuccess(true);
                const accessToken = response?.data?.Token;
                const name = response?.data?.Username;
                localStorage.setItem('Token', accessToken);
                localStorage.setItem('Name', name);
                setUser('');
                setPwd('');
                // window.location.reload();
            })
            .catch(function (err) {
                //handle error
                if (!err?.response) {
                    setErrMsg('Máy chủ hiện không phản hồi');
                } else if (err.response?.status === 400) {
                    setErrMsg('Tài khoản hoặc mật khẩu không đúng');
                } else if (err.response?.status === 422) {
                    setErrMsg('Tài khoản và mật khẩu không được để trống');
                } else {
                    setErrMsg('Đăng nhập không thành công');
                }
                errRef.current.focus();
            });
    }

    const handleClick = () => {
        window.location.reload();
    }

    return (
        <>
            <div className="container sign-in">
                <div className="row">
                    <Heading mixin="Welcome to Pet Store" title="Đăng nhập" />
                    {success && localStorage.getItem('Token') ? (
                        <div className="col-md success">
                            <p>Đăng nhập thành công!</p>
                            <a href="/" onClick={handleClick} className='success-link'>Trở lại trang chủ</a>
                        </div >
                    ) : (
                        <form className="col-md sign-in__form" onSubmit={handleSubmit}>
                            <p className="sign-in__label">Tên đăng nhập (*)</p>
                            <input
                                type="text"
                                className="sign-in__input"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                            />
                            <p ref={errRef} className="errmsg">{errMsg}</p>

                            <p className="sign-in__label">Mật khẩu (*)</p>
                            <input
                                type="password"
                                className="sign-in__input"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                            />
                            <p ref={errRef} className="errmsg">{errMsg}</p>

                            <p className="sign-in__description">Nếu bạn chưa có tài khoản, vui lòng chọn
                                <Link to="/sign_up"><span>Đăng ký</span></Link>
                            </p>
                            <input type="submit" className="sign-in__btn" value="Đăng nhập"></input>
                        </form>
                    )}

                    <div className="col-md sign-in__image">
                        <img className="sign-in__img" src={SignInImg} alt="Sign In"></img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;