import React from 'react';
import './ServiceDetail.css';
import Booking from './Booking';
import Heading from '../Heading';
import Hinh from '../../assets/images/bathing1.jpg';
import Hinh1 from '../../assets/images/bathing2.jpg';
import Hinh2 from '../../assets/images/bathing3.jpg';

function ServiceDetail() {
    return (
        <div className="container service-detail">
            <div className="row">
                <Heading mixin="What we have?" title="What Make Your Pet Comfortable?" />
                <div className="col-md image-container">
                    <div className="img-container">
                        <img className="service-img" src={Hinh} alt="img"></img>
                        <img className="service-img" src={Hinh1} alt="img"></img>
                    </div>
                    <div className="img-container">
                        <img className="service-img" src={Hinh1} alt="img"></img>
                        <img className="service-img" src={Hinh2} alt="img"></img>
                    </div>
                </div>

                <div className="col-md service-info">
                    <div className="content-container">
                        <p className="service-content">
                            - Featuring all natural, detergent-free, hypo-allergenic,
                            shampoo & conditioner from PetStore.
                        </p>
                        <p className="service-content">
                            - Pets of all sizes are welcome.
                        </p>
                        <p className="service-content">
                            - Wash your pet and leave us the mess.
                        </p>
                    </div>

                    <div className="table-container">
                        <table className="service-table">
                            <tr className="service-table__row">
                                <th className="service-table__heading">Weight</th>
                                <th className="service-table__heading">Price</th>
                            </tr>
                            <tr className="service-table__row">
                                <td className="service-table__data"><i className="fas fa-angle-left"></i> 2kg</td>
                                <td className="service-table__data">80.000đ</td>
                            </tr>
                            <tr className="service-table__row">
                                <td className="service-table__data">2 - 4kg</td>
                                <td className="service-table__data">100.000đ</td>
                            </tr>
                            <tr className="service-table__row">
                                <td className="service-table__data">4 - 7kg</td>
                                <td className="service-table__data">160.000đ</td>
                            </tr>
                            <tr className="service-table__row">
                                <td className="service-table__data">7 - 10kg</td>
                                <td className="service-table__data">200.000đ</td>
                            </tr>
                            <tr className="service-table__row">
                                <td className="service-table__data">10 - 15kg</td>
                                <td className="service-table__data">250.000đ</td>
                            </tr>
                            <tr className="service-table__row">
                                <td className="service-table__data"><i className="fas fa-angle-right"></i> 15kg</td>
                                <td className="service-table__data">450.000đ</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <Booking />
        </div>
    );
}

export default ServiceDetail;