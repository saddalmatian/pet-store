import './SloganSer.css';
import Pic from "./ServicePics"
import Combo from "./ComboSer"
import Heading from '../Heading'

function Service() {
    return (
        <div className="container service" style={{ backgroundColor: "var(--bg-color)", paddingBottom: "50px" }}>
            <div className="row">
                <Heading mixin="Our Services" title="Make Your Pets Become Queen And King" />
                <div style={{ paddingBottom: "50px" }}>
                    <Pic />
                </div>
                <Heading mixin="Our Combo" title="What Make Your Pet Comfortable?" />
                <div className="col-md">
                    <Combo />
                </div>
            </div>
        </div>
    );
}
export default Service;