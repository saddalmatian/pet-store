import './SloganSer.css';
import Pic from "./ServicePics"
import Combo from "./ComboSer"

function Service(){
    return(
        <div className="container service vh-100" style={{backgroundColor:"var(--bg-color)"}}>
            <div className="row">
                <div className="slogan-ser">
                    <p className="mixin-font line-1-ser">Our Services</p>
                    <p className="title line-2-ser">Make your pets become queen and king</p>
                </div>
                <div>
                    <Pic/>
                </div>
                <div className="slogan-ser" style={{marginTop:"7%"}}>
                    <p className="mixin-font line-1-ser">Our Services</p>
                    <p className="title line-2-ser">What make your pet comfortable?</p>
                </div>
                <div className="col-md">
                    <Combo/>
                </div>
                
            </div>
        </div>
    );
}
export default Service;