import React from 'react';
import Infor from "./Infor";
import Pic from './Pic';
import like from "./like.png";
import delivery from "./delivery.png";
import './About.css';
import Heading from "../Heading";

function About(props) {
    return (
        <div className="container about">
            <Heading mixin="Why Choose Us?" title="Điều Gì Làm Mọi Người Tin Tưởng Pet Store?" />
            <div className="row ">
                <div className="col-md d-md-flex justify-content-center flex-column">
                    <div className="d-md-flex">
                        <div className="col-md-6">
                            <Pic />
                        </div>
                        <div className="col-md-6">
                            <div className="row justify-content-around">
                                <div className="col-md-12">
                                    <Infor />
                                </div>
                                <div className="col-md-6">
                                    <div className="container">
                                        <div className="row justify-content-around">
                                            <div className="square col-md">
                                                <div className="content">
                                                    <img className="img-content like-img" src={like} alt="img-content"></img>
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
                                                    <img className="img-content" src={delivery} alt="img-content"></img>
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