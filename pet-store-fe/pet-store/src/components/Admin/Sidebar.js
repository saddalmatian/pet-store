import React from 'react';
import { Link } from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import "./Sidebar.css";

function Sidebar(){
    return(
        <SideNav
        onSelect={(selected) => {
            
        }}
        style={{backgroundColor:"var(--primary-color)", marginBottom:"-100%", paddingBottom:"100%" }}
    >
        <SideNav.Toggle style={{color:"#ffff"}} />
        <SideNav.Nav defaultSelected="dashboard" >
            <NavItem eventKey="dashboard">
                <NavIcon >
                <Link to="/dashboard"><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', color:"#ffff" }} /></Link>
                </NavIcon>
                <NavText style={{color:"#ffff"}}>
                    <Link to="/dashboard" style={{ textDecoration:'0'}}>Trang chủ</Link>
                </NavText>
            </NavItem>
            <NavItem eventKey="product">
                <NavIcon >
                <Link to="/product"><i className="fa fa-fw fa-box-open" style={{ fontSize: '1.75em', color:"#ffff" }} /></Link>
                </NavIcon>
                <NavText style={{color:"#ffff"}}>
                    <Link to="/product"style={{ textDecoration:'0'}} >  Sản phẩm</Link>
                </NavText>
            </NavItem>
            <NavItem eventKey="bill">
                <NavIcon >
                <Link to="/bill" ><i className="fa fa-fw fa-credit-card" style={{ fontSize: '1.75em', color:"#ffff" }} /></Link>
                </NavIcon>
                <NavText style={{color:"#ffff"}}>
                    
                    <Link to="/bill" style={{ textDecoration:'0'}}>Đơn hàng</Link>
                </NavText>
            </NavItem>
            <NavItem eventKey="promo">
                <NavIcon >
                <Link to="/promo"><i className="fa fa-fw fa-tag" style={{ fontSize: '1.75em', color:"#ffff" }} /></Link>
                </NavIcon>
                <NavText style={{color:"#ffff"}}>
                    <Link to="/promo"style={{ textDecoration:'0'}}>Khuyến mãi</Link>
                </NavText>
            </NavItem>
            <NavItem eventKey="staff">
                <NavIcon >
                <Link to="/staff"><i className="fa fa-fw fa-user-circle" style={{ fontSize: '1.75em', color:"#ffff" }} /></Link>
                </NavIcon>
                <NavText style={{color:"#ffff"}}>
                    <Link to="/staff"style={{ textDecoration:'0'}}>Nhân viên</Link>
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    )

}
export default Sidebar;