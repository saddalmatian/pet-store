import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './SignIn.css';
import Heading from '../Heading';
import SignInImg from '../../assets/images/SignIn.jpg'
import axios from 'axios';
import PropTypes from 'prop-types';
import Dashboard from './Dashboard'

function SignIn({ setToken }) {

    const [data, setData] = useState({
        username: "",
        password: ""
    });
    const [isSuccess, setSuccess] = useState(false);
    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        // localStorage.removeItem('token');
        var bodyFormData = new FormData();
        bodyFormData.append('username', data.username);
        bodyFormData.append('password', data.password);
        setSuccess(true);


        await axios({
            method: "post",
            url: "http://127.0.0.1:8000/employees/sign-in",
            data: bodyFormData,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
            .then(function (response) {
                //handle success
                console.log(isSuccess)
                console.log(response.data.Token);
                console.log(response);
                // window.location.reload();
                console.log(`${localStorage.getItem('token')}`)



            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }


    return (
        <div className="container sign-in">

            <div className="row">
                <Heading mixin="Welcome to Pet Store" title="Đăng nhập" />
                <div className="col-md sign-in__form">

                    <form onSubmit={handleSubmit}>
                        <p className="sign-in__label">Tên đăng nhập (*)</p>
                        <input type="text" className="sign-in__input" name="username" onChange={handleChange} value={data.username}></input>
                        <p className="sign-in__label">Mật khẩu (*)</p>
                        <input type="password" className="sign-in__input" name="password" onChange={handleChange} value={data.password}></input>
                        <input type="submit" className="sign-in__btn" value="Đăng nhập" ></input>
                    </form>
                </div>

                <div className="col-md sign-in__image">
                    <img className="sign-in__img" src={SignInImg} alt="Sign In"></img>
                </div>
            </div>


        </div>
    );
}



export default SignIn;