import React from 'react';
import './Header.css'
import Sidebar from"./Sidebar"
import pic1 from "../../assets/images/Tucker.jpg";
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from 'react-bootstrap/Dropdown'


function Header(props) {

    return (
        <nav className="navbar navbar-expand-lg header"  style={{zIndex:"1000"}}>
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="container-fluid header-wrapper" style={{marginLeft:'64px'}}> 
                
                <a className="navbar-brand" href="#">{props.title}</a>
                
                <div className="collapse navbar-collapse justify-content-end" id="navigation">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            {/* <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">
                                <span className="no-icon "><img src={pic1} style={{width: '40px', height: '40px', borderRadius:'50px'}} /></span>
                            </a> */}
                            <DropdownButton id="dropdown-item-button" title="Dropdown button">
                                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                <Dropdown.Item as="button">Action</Dropdown.Item>
                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                            </DropdownButton>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    );
  
}
export default Header;