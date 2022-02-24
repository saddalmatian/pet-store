import './Pic.css';
import AboutImg from '../../assets/images/About.png'

function Pic(options) {
    return(
        <div className="col-md">
        <img src={AboutImg} alt="About-images" className="img-fluid about-img"></img>
        </div>
    )
}
export default Pic;