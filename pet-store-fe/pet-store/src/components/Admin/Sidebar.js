import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Staff from "./Staff"
import Footer from '../Footer/Footer';


import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import "./Sidebar.css";

function Sidebar({ sideNavExpanded, setSideNavExpanded }) {
    const [selected, setSelected] = useState()
     console.log( localStorage.getItem('Username'))
    return (
        localStorage.getItem('Username')!=='admin'?(
        <React.Fragment>
            <SideNav
                onToggle={() => {
                    setSideNavExpanded(!sideNavExpanded);
                }}
                // onSelect={(selected) => {
                //     setSelected({ selected });
                // }}
                style={{ backgroundColor: "var(--primary-color)"}}
            >
                <SideNav.Toggle style={{ color: "#ffff" }} />
                <SideNav.Nav defaultSelected="/admin/dashboard">
                    <NavItem eventKey="/admin/dashboard">
                        <NavIcon >
                            <Link to="/admin/dashboard"><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', color: "#ffff" }} /></Link>
                        </NavIcon>
                        <NavText style={{ color: "#ffff" }}>
                            <Link to="/admin/dashboard" style={{ textDecoration: '0' }}>Trang chủ</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="/admin/product">
                        <NavIcon >
                            <Link to="/admin/product"><i className="fa fa-fw fa-box-open" style={{ fontSize: '1.75em', color: "#ffff" }} /></Link>
                        </NavIcon>
                        <NavText style={{ color: "#ffff" }}>
                            <Link to="/admin/product" style={{ textDecoration: '0' }} >  Sản phẩm</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="/admin/service">
                        <NavIcon >
                            <Link to="/admin/service"><i className="fa fa-fw fa-tasks" style={{ fontSize: '1.75em', color: "#ffff" }} /></Link>
                        </NavIcon>
                        <NavText style={{ color: "#ffff" }}>
                            <Link to="/admin/service" style={{ textDecoration: '0' }} >  Dịch vụ</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="/admin/bill">
                        <NavIcon >
                            <Link to="/admin/bill" ><i className="fa fa-fw fa-credit-card" style={{ fontSize: '1.75em', color: "#ffff" }} /></Link>
                        </NavIcon>
                        <NavText style={{ color: "#ffff" }}>

                            <Link to="/admin/bill" style={{ textDecoration: '0' }}>Đơn hàng</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="/admin/promo">
                        <NavIcon >
                            <Link to="/admin/promo"><i className="fa fa-fw fa-tag" style={{ fontSize: '1.75em', color: "#ffff" }} /></Link>
                        </NavIcon>
                        <NavText style={{ color: "#ffff" }}>
                            <Link to="/admin/promo" style={{ textDecoration: '0' }}>Khuyến mãi</Link>
                        </NavText>
                    </NavItem>
                    {/* <NavItem eventKey="/admin/staff" id='staff'>
                        <NavIcon >
                            <Link to ="/admin/staff"><i className="fa fa-fw fa-user-circle" style={{ fontSize: '1.75em', color: "#ffff" }} /></Link>
                        </NavIcon>
                        <NavText style={{ color: "#ffff" }}>
                        <Link to="/admin/staff" style={{ textDecoration: '0' }}>Nhân viên</Link>
                        </NavText>
                    </NavItem> */}
                </SideNav.Nav>

            </SideNav>
            {/* <Footer /> */}
        </React.Fragment>):(
             <React.Fragment>
             <SideNav
                 onToggle={() => {
                     setSideNavExpanded(!sideNavExpanded);
                 }}
                 // onSelect={(selected) => {
                 //     setSelected({ selected });
                 // }}
                 style={{ backgroundColor: "var(--primary-color)"}}
             >
                 <SideNav.Toggle style={{ color: "#ffff" }} />
                 <SideNav.Nav defaultSelected="/admin/dashboard">
                     <NavItem eventKey="/admin/dashboard">
                         <NavIcon >
                             <Link to="/admin/dashboard"><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', color: "#ffff" }} /></Link>
                         </NavIcon>
                         <NavText style={{ color: "#ffff" }}>
                             <Link to="/admin/dashboard" style={{ textDecoration: '0' }}>Trang chủ</Link>
                         </NavText>
                     </NavItem>
                     <NavItem eventKey="/admin/product">
                         <NavIcon >
                             <Link to="/admin/product"><i className="fa fa-fw fa-box-open" style={{ fontSize: '1.75em', color: "#ffff" }} /></Link>
                         </NavIcon>
                         <NavText style={{ color: "#ffff" }}>
                             <Link to="/admin/product" style={{ textDecoration: '0' }} >  Sản phẩm</Link>
                         </NavText>
                     </NavItem>
                     <NavItem eventKey="/admin/service">
                         <NavIcon >
                             <Link to="/admin/service"><i className="fa fa-fw fa-tasks" style={{ fontSize: '1.75em', color: "#ffff" }} /></Link>
                         </NavIcon>
                         <NavText style={{ color: "#ffff" }}>
                             <Link to="/admin/service" style={{ textDecoration: '0' }} >  Dịch vụ</Link>
                         </NavText>
                     </NavItem>
                     <NavItem eventKey="/admin/bill">
                         <NavIcon >
                             <Link to="/admin/bill" ><i className="fa fa-fw fa-credit-card" style={{ fontSize: '1.75em', color: "#ffff" }} /></Link>
                         </NavIcon>
                         <NavText style={{ color: "#ffff" }}>
 
                             <Link to="/admin/bill" style={{ textDecoration: '0' }}>Đơn hàng</Link>
                         </NavText>
                     </NavItem>
                     <NavItem eventKey="/admin/promo">
                         <NavIcon >
                             <Link to="/admin/promo"><i className="fa fa-fw fa-tag" style={{ fontSize: '1.75em', color: "#ffff" }} /></Link>
                         </NavIcon>
                         <NavText style={{ color: "#ffff" }}>
                             <Link to="/admin/promo" style={{ textDecoration: '0' }}>Khuyến mãi</Link>
                         </NavText>
                     </NavItem>
                     <NavItem eventKey="/admin/staff" id='staff'>
                         <NavIcon >
                             <Link to ="/admin/staff"><i className="fa fa-fw fa-user-circle" style={{ fontSize: '1.75em', color: "#ffff" }} /></Link>
                         </NavIcon>
                         <NavText style={{ color: "#ffff" }}>
                         <Link to="/admin/staff" style={{ textDecoration: '0' }}>Nhân viên</Link>
                         </NavText>
                     </NavItem>
                 </SideNav.Nav>
 
             </SideNav>
             {/* <Footer /> */}
         </React.Fragment>
        )
    )

}
export default Sidebar;