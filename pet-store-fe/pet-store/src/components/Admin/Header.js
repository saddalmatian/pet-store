import React, {useEffect, useState} from 'react';
import './Header.css'
import axios from 'axios';
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from 'react-bootstrap/Dropdown'
import Login from "./SignIn"


function Header(props) {
     const[name, setName]= useState();

    useEffect(async function () {
        await axios({
            method: 'GET',
            url:'http://127.0.0.1:8000/employees/get-employee',
            headers:{
                accept: 'application/json',
                'authorization-token': localStorage.getItem('token')
            }
        }).then((response) => {setName(response.data.FullName)})
    },[]);
    return (
        <nav className="navbar navbar-expand-lg header"  style={{zIndex:"1000"}}>
            <div className="container-fluid header-wrapper" > 
                
                <a className="navbar-brand" href="#">{props.title}</a>
                
                <div className="collapse navbar-collapse justify-content-end" id="navigation">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <DropdownButton id="dropdown-item-button" title={name}>
                                <Dropdown.Item as="button" onClick={()=> {localStorage.removeItem('token'); localStorage.removeItem('Username') ;window.location.reload() ; <Login/>}}>Logout</Dropdown.Item>
                            </DropdownButton>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    );
  
}
export default Header;