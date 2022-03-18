import React from 'react';
import "./ComboSer.css";
import pic1 from "../../assets/images/ser1.png";
import pic2 from "../../assets/images/ser2.png";
import pic3 from "../../assets/images/ser3.png";
import pic4 from "../../assets/images/ser4.png";
import pic5 from "../../assets/images/All.png";
import pic6 from "../../assets/images/All2.png";


function ComboSer(props){
    return(
        <div className="container service-combo">
            <div className="row d-flex gap-5 justify-content-center">
                <div className="col-md-3 text-center position-relative p-0">
                    <div class="d-flex flex-column round-3 shadow-lggit service-combo-hover" style={{borderRadius: '15px',backgroundColor: 'var(--primary-color)'}}>
                        <img src={pic1} alt="No-pic" className="img-combo" />
                        <p className="name-combo col-md-3 text-nowrap">Tắm & Cắt tỉa</p>
                        <img src={pic2} alt="No-pic" className="img-combo" />
                        
                    </div>
                </div> 
                <div className="col-md-3 text-center position-relative p-0">
                    <div class="d-flex flex-column round-3 shadow-lg service-combo-hover" style={{borderRadius: '15px',backgroundColor: 'var(--primary-color)'}}>
                        <img src={pic3} alt="No-pic" className="img-combo" />
                        <p className="name-combo col-md-3 text-nowrap">Trông hộ & Đi dạo</p>
                        <img src={pic4} alt="No-pic" className="img-combo" />
                        
                    </div>
                </div> 
                <div className="col-md-3 text-center position-relative p-0">
                    <div class="d-flex flex-column round-3 shadow-lg service-combo-hover" style={{borderRadius: '15px',backgroundColor: 'var(--primary-color)'}}>
                        <img src={pic5} alt="No-pic" className="img-combo" />
                        <p className="name-combo col-md-3 text-nowrap">Tất cả</p>
                        <img src={pic6} alt="No-pic" className="img-combo" />
                    </div>
                </div> 
            </div>
        </div>
    )

}
export default ComboSer;