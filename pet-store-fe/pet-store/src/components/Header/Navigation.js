import React from 'react';
// import { Link } from 'react-router-dom';
import './Navigation.css';
import NavItem from './NavItem';

function Navigation() {
    return (
        <div className="nav">
            <ul className="nav-list">
                <NavItem href="/" title="Trang chủ" />
                <NavItem href="/about" title="Thông tin" />
                <NavItem href="/product" title="Sản phẩm" />
                <NavItem href="/service" title="Dịch vụ" />
            </ul>
        </div>
    );
}

export default Navigation;