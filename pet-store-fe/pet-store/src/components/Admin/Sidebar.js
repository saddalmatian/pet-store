import React from 'react';
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
            <NavItem eventKey="service">
                <NavIcon >
                    <i className="fa fa-fw fa-scissors" style={{ fontSize: '1.75em', color:"#ffff" }} />
                </NavIcon>
                <NavText style={{color:"#ffff"}}>
                    Dịch vụ
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
            <NavItem eventKey="sale">
                <NavIcon>
                    <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em', color:"#ffff "}} />
                </NavIcon>
                <NavText style={{color:"#ffff"}}>
                    Thống kê
                </NavText>
                <NavItem eventKey="charts/monthlysale">
                    <NavText style={{color:"#000"}}>
                        Doanh thu theo tháng
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/quarterlysale">
                    <NavText style={{color:"#000"}}>
                        Doanh thu theo quý
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/monthlypromo">
                    <NavText style={{color:"#000"}}>
                        Khuyến mãi theo tháng
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/quarterlypromo">
                    <NavText style={{color:"#000"}}>
                        Khuyến mãi theo quý
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/currentlypromo">
                    <NavText style={{color:"#000"}}>
                        Khuyến mãi đang diễn ra
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/monthlyuser" style={{minWidth:"215px"}}>
                    <NavText style={{color:"#000"}}>
                        Người dùng theo tháng
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/quarterlyuser">
                    <NavText style={{color:"#000"}}>
                        Người dùng theo quý
                    </NavText>
                </NavItem>
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