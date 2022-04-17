import React, { useState } from 'react';
import Dashboard from "./Dashboard"
import Product from "./Product"
import Promo from "./Promo"
import Staff from "./Staff"
import Bill from "./Bill"
import Login from "./SignIn"
import {BrowserRouter as Router, Route } from 'react-router-dom';
import useToken from './useToken';
import SideBar from './Sidebar'
import Header from './Header';
import Footer from '../Footer/Footer';


function Admin() {

    return (
      
         <Login/>
          
    )
}
export default Admin;