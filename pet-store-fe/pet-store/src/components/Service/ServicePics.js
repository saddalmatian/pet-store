import './ServicePics.css';
import pic1 from "./ser1.png";
import pic2 from "./ser2.png";
import pic3 from "./ser3.png";
import pic4 from "./ser4.png";

function ServicePics() {

    return (
        <div className="container service-pic">
            <div className="row d-flex gap-4 justify-content-around justify-content-start">
                <div className="col-md text-center position-relative p-0">
                    <div class="d-flex flex-column round-3 shadow-lg service-hover" style={{borderRadius: '15px', backgroundColor: '#fff'}}>
                        <img src={pic1} alt="No-pic" className="img-ser1" />
                        <div className="wrap col-md-3">
                        <p className="name-ser col-md-3 text-nowrap">Pet Bathing</p>
                        </div>
                    </div> 
                </div>
                <div className="col-md text-center position-relative p-0">
                    <div class="d-flex flex-column round-3 shadow-lg service-hover" style={{borderRadius: '15px', backgroundColor: '#fff', marginTop: '30%'}}>
                        <img src={pic2} alt="No-pic" className="img-ser2" />
                        <div className="wrap col-md-3">
                        <p className="name-ser col-md-3 text-nowrap">Pet Grooming</p>
                        </div>
                    </div> 
                </div>
                <div className="col-md text-center position-relative p-0">
                    <div class="d-flex flex-column round-3 shadow-lg service-hover" style={{borderRadius: '15px', backgroundColor: '#fff'}}>
                        <img src={pic3} alt="No-pic" className="img-ser1" />
                        <div className="wrap col-md-3">
                        <p className="name-ser col-md-3 text-nowrap">Pet Boarding</p>
                        </div>
                    </div> 
                </div>
                <div className="col-md text-center position-relative p-0">
                    <div class="d-flex flex-column round-3 shadow-lg service-hover" style={{borderRadius: '15px', backgroundColor: '#fff',  marginTop: '30%'}}>
                        <img src={pic4} alt="No-pic" className="img-ser2" />
                        <div className="wrap col-md-3">
                        <p className="name-ser col-md-3 text-nowrap">Pet Walking</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )

}
export default ServicePics;