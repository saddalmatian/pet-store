import React, { useState } from 'react';
import Dashboard from "./Dashboard"
import Product from "./Product"
import Promo from "./Promo"
import Staff from "./Staff"
import Bill from "./Bill"
import Login from "./SignIn"
import { Routes, Route } from 'react-router-dom';
import useToken from './useToken';



function Admin() {


    // const { token, setToken } = useToken();
    // if (!token) {
    //     return <Login setToken={setToken} />
    // }
    // <Login />
    return (
        <div className="container-fluid admin" style={{ backgroundColor: "var(--bg-color)" }}>
            <div className="row">

                <div className="col-md" style={{ paddingLeft: "0" }} >
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/product' element={<Product />} />
                        <Route path='/promo' element={<Promo />} />
                        <Route path='/staff' element={<Staff />} />
                        <Route path='/bill' element={<Bill />} />

                    </Routes>
                    <Login />
                </div>

            </div>
        </div>


    )
}
export default Admin;