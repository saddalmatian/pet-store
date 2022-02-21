import './Pic.css';
import about from './About.png'

function Pic(options) {
    return(
        <div className="col-md">
        <img src={about} alt="No pic" className="img-fluid img"></img>
        </div>
    )
}
export default Pic;