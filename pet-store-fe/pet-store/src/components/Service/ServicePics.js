import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePics.css';
import pic1 from "../../assets/images/ser1.png";
import pic2 from "../../assets/images/ser2.png";
import pic3 from "../../assets/images/ser3.png";
import pic4 from "../../assets/images/ser4.png";

function ServicePics() {

    return (
        <div className="container service-pic">
            <div className="row d-flex gap-4 justify-content-around justify-content-start">
                <div className="col-md text-center position-relative p-0">
                    <Link to="/bathing_service" class="d-flex flex-column round-3 shadow-lg service-hover" style={{borderRadius: '15px', backgroundColor: '#fff'}}>
                        <img src={pic1} alt="No-pic" className="img-ser1" />
                        <div className="wrap col-md-3">
                        <p className="name-ser col-md-3 text-nowrap">Tắm rửa</p>
                        </div>
                    </Link> 
                </div>
                <div className="col-md text-center position-relative p-0">
                    <Link to="/grooming_service" class="d-flex flex-column round-3 shadow-lg service-hover" style={{borderRadius: '15px', backgroundColor: '#fff', marginTop: '30%'}}>
                        <img src={pic2} alt="No-pic" className="img-ser2" />
                        <div className="wrap col-md-3">
                        <p className="name-ser col-md-3 text-nowrap">Cắt tỉa lông</p>
                        </div>
                    </Link> 
                </div>
                <div className="col-md text-center position-relative p-0">
                    <Link to="/boarding_service" class="d-flex flex-column round-3 shadow-lg service-hover" style={{borderRadius: '15px', backgroundColor: '#fff'}}>
                        <img src={pic3} alt="No-pic" className="img-ser1" />
                        <div className="wrap col-md-3">
                        <p className="name-ser col-md-3 text-nowrap">Trông hộ</p>
                        </div>
                    </Link> 
                </div>
                <div className="col-md text-center position-relative p-0">
                    <Link to="/walking_service" class="d-flex flex-column round-3 shadow-lg service-hover" style={{borderRadius: '15px', backgroundColor: '#fff',  marginTop: '30%'}}>
                        <img src={pic4} alt="No-pic" className="img-ser2" />
                        <div className="wrap col-md-3">
                        <p className="name-ser col-md-3 text-nowrap">Đi dạo</p>
                        </div>
                    </Link> 
                </div>
            </div>
        </div>
    )

}
export default ServicePics;