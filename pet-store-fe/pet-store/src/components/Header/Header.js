import React from 'react';
import './Header.css'
import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
    return (
        <div className="container header">
            <Logo />
            <Navigation />
            <div className="header-action">
                <i class="fa-solid fa-cart-shopping header-icon__cart"></i>
                {/* <i class="fa-solid fa-user"></i> */}
                <span className="header-action__signin">Đăng ký </span>
                 / 
                <span className="header-action__signup"> Đăng nhập</span>
            </div>
        </div>
        
    );
}

export default Header;