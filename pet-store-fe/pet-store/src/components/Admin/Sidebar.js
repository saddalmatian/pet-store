import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React from 'react';
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
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', color:"#ffff" }} />
                </NavIcon>
                <NavText style={{color:"#ffff"}}>
                    Trang chủ
                </NavText>
            </NavItem>
            <NavItem eventKey="product">
                <NavIcon >
                    <i className="fa fa-fw fa-box-open" style={{ fontSize: '1.75em', color:"#ffff" }} />
                </NavIcon>
                <NavText style={{color:"#ffff"}}>
                    Sản phẩm
                </NavText>
            </NavItem>
            <NavItem eventKey="bill">
                <NavIcon >
                    <i className="fa fa-fw fa-credit-card" style={{ fontSize: '1.75em', color:"#ffff" }} />
                </NavIcon>
                <NavText style={{color:"#ffff"}}>
                    Đơn hàng
                </NavText>
            </NavItem>
            <NavItem eventKey="promo">
                <NavIcon >
                    <i className="fa fa-fw fa-tag" style={{ fontSize: '1.75em', color:"#ffff" }} />
                </NavIcon>
                <NavText style={{color:"#ffff"}}>
                    Khuyến mãi
                </NavText>
            </NavItem>
            <NavItem eventKey="staff">
                <NavIcon >
                    <i className="fa fa-fw fa-user-circle" style={{ fontSize: '1.75em', color:"#ffff" }} />
                </NavIcon>
                <NavText style={{color:"#ffff"}}>
                    Nhân viên
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    )

}
export default Sidebar;