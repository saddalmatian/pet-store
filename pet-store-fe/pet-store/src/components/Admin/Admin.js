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
                        <Route path='/admin/dashboard' element={<Dashboard />} />
                        <Route path='/admin/product' element={<Product />} />
                        <Route path='/admin/promo' element={<Promo />} />
                        <Route path='/admin/staff' element={<Staff />} />
                        <Route path='/admin/bill' element={<Bill />} />
                    </Routes>
                    <Login />
                </div>

            </div>
        </div>


    )
}
export default Admin;