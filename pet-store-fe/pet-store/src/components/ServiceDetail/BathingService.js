import React from 'react';
import './ServiceDetail.css';
import Booking from './Booking';
import Heading from '../Heading';
import Hinh from '../../assets/images/bathing1.jpg';
import Hinh1 from '../../assets/images/bathing2.jpg';
import Hinh2 from '../../assets/images/bathing3.jpg';
import Hinh3 from '../../assets/images/bathing4.png';
import Header from '../Header/Header';


function BathingService() {
    return (
        <>
            <Header />
            <div className="container service-detail">
                <div className="row">
                    <Heading mixin="What we have?" title="Dịch vụ tắm rửa tại Pet Store có gì?" />
                    <div className="col-md image-container">
                        <div className="img-container">
                            <img className="service-img" src={Hinh} alt="img"></img>
                            <img className="service-img" src={Hinh1} alt="img"></img>
                        </div>
                        <div className="img-container">
                            <img className="service-img" src={Hinh3} alt="img"></img>
                            <img className="service-img" src={Hinh2} alt="img"></img>
                        </div>
                    </div>

                    <div className="col-md service-info">
                        <div className="content-container">
                            <p className="service-content">
                                - Dầu gội và dầu xả tại Pet Store với thành phần hoàn toàn từ thiên nhiên,
                                không chứa chất tẩy rửa, không gây dị ứng.
                            </p>
                            <p className="service-content">
                                - Thú cưng với mọi kích cỡ luôn được chào đón.
                            </p>
                            <p className="service-content">
                                - Tắm sạch thú cưng của bạn và để  lại cho chúng tôi những thứ lộn xộn.
                            </p>
                        </div>

                        <div className="table-container">
                            <table className="service-table">
                                <thead>
                                    <tr className="service-table__row">
                                        <th className="service-table__heading">Cân nặng</th>
                                        <th className="service-table__heading">Chi phí ước tính</th>
                                    </tr>
                                </thead>
                                <tbody>
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <Booking bookType="Bathing"/>
            </div>
        </>
    );
}

export default BathingService;