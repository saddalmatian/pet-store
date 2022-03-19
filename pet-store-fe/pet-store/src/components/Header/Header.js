import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
    return (
        <div className="container header">
            <Logo />
            <Navigation />
            <div className="header-action">
                <Link className="header-icon__cart" to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
                {/* <i className="fa-solid fa-user"></i> */}
                <Link to="/sign_up" className="header-action__signin"><span>Đăng ký</span></Link>
                 <span>/</span> 
                <Link to="/sign_in" className="header-action__signup"><span>Đăng nhập</span></Link>
            </div>
        </div>
        
    );
}

export default Header;