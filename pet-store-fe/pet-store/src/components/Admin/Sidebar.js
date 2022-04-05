import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import "./Sidebar.css";

function Sidebar() {
    const [selected, setSelected] = useState()
    return (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    setSelected({ selected });
                }}
                style={{ backgroundColor: "var(--primary-color)", marginBottom: "-100%", paddingBottom: "100%" }}
            >
                <SideNav.Toggle style={{ color: "#ffff" }} />
                <SideNav.Nav selected={selected}>
                    <NavItem eventKey="/dashboard">
                        <NavIcon >
                            <Link to="/dashboard"><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', color: "#ffff" }} /></Link>
                        </NavIcon>
                        <NavText style={{ color: "#ffff" }}>
                            <Link to="/dashboard" style={{ textDecoration: '0' }}>Trang chủ</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="/product">
                        <NavIcon >
                            <Link to="/product"><i className="fa fa-fw fa-box-open" style={{ fontSize: '1.75em', color: "#ffff" }} /></Link>
                        </NavIcon>
                        <NavText style={{ color: "#ffff" }}>
                            <Link to="/product" style={{ textDecoration: '0' }} >  Sản phẩm</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="/bill">
                        <NavIcon >
                            <Link to="/bill" ><i className="fa fa-fw fa-credit-card" style={{ fontSize: '1.75em', color: "#ffff" }} /></Link>
                        </NavIcon>
                        <NavText style={{ color: "#ffff" }}>

                            <Link to="/bill" style={{ textDecoration: '0' }}>Đơn hàng</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="/promo">
                        <NavIcon >
                            <Link to="/promo"><i className="fa fa-fw fa-tag" style={{ fontSize: '1.75em', color: "#ffff" }} /></Link>
                        </NavIcon>
                        <NavText style={{ color: "#ffff" }}>
                            <Link to="/promo" style={{ textDecoration: '0' }}>Khuyến mãi</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="/staff">
                        <NavIcon >
                            <Link to="/staff"><i className="fa fa-fw fa-user-circle" style={{ fontSize: '1.75em', color: "#ffff" }} /></Link>
                        </NavIcon>
                        <NavText style={{ color: "#ffff" }}>
                            <Link to="/staff" style={{ textDecoration: '0' }}>Nhân viên</Link>
                        </NavText>
                    </NavItem>
                </SideNav.Nav>

            </SideNav>
        </React.Fragment>
    )

}
export default Sidebar;