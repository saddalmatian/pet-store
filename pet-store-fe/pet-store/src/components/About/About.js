import Infor from "./Infor" 
import Slogan from './Slogan'
import Pic from './Pic';
import like from "./like.png";
import delivery from "./delivery.png";
import './About.css'

function About (props) {
    return(
        <div className="container about vh-100">
            <div className="row ">
            <div className="col-md ms-2 ps-2 d-md-flex justify-content-center flex-column">
                    <Slogan />
                    <div className="d-md-flex">
                        <div className="col-md-6">
                            <Pic/>
                        </div>
                        <div class="col-md-6">
                            <div className="row justify-content-around">
                                <div className="col-md-12">
                                    <Infor/>
                                </div>
                                <div className="col-md-6">
                                    <div className="container">
                                        <div className="row justify-content-around">
                                            <div className="square col-md">
                                                 <div className="content">
                                                    <img className="img-content" src={like}></img>
                                                    High Quality
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="container">
                                            <div className="row justify-content-around">
                                            <div className="square col-md">
                                                 <div className="content">
                                                    <img className="img-content" src={delivery}></img>
                                                    Fast Delivery
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;