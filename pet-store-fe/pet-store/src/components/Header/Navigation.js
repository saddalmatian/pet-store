import React from 'react';
import './Navigation.css';
import NavItem from './NavItem';

function Navigation() {
    return (
        <div className="nav">
            <ul className="nav-list">
                <NavItem title="Trang chủ"/>
                <NavItem title="Thông tin"/>
                <NavItem title="Sản phẩm"/>
                <NavItem title="Dịch vụ"/>
            </ul>
        </div>
    );
}

export default Navigation;