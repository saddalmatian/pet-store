import React from 'react';
import './SloganSer.css';
import Pic from "./ServicePics"
import Combo from "./ComboSer"
import Heading from '../Heading'
import Header from '../Header/Header'

function Service() {
    return (
        <>
            <Header />
            <div className="container service" style={{ backgroundColor: "var(--bg-color)", paddingBottom: "50px" }}>
                <div className="row">
                    <Heading mixin="Our Services" title="Các Dịch Vụ Mà Pet Store Có" />
                    <div style={{ paddingBottom: "50px" }}>
                        <Pic />
                    </div>
                    <Heading mixin="Our Combo" title="Các Gói Dịch Vụ Kết Hợp Có Tại Pet Store" />
                    <div className="col-md">
                        <Combo />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Service;