import React from 'react';
import './ServiceDetail.css';
import Booking from './Booking';
import Heading from '../Heading';
import Hinh from '../../assets/images/boarding.png';
import Hinh1 from '../../assets/images/boarding1.jpg';
import Hinh2 from '../../assets/images/boarding2.jpg';
import Hinh3 from '../../assets/images/boarding3.jpg';

function BoardingService() {
    return (
        <div className="container service-detail">
            <div className="row">
                <Heading mixin="What we have?" title="Những tiện ích khi gửi Pet Store trông hộ" />
                <div className="col-md image-container">
                    <div className="img-container">
                        <img className="service-img" src={Hinh} alt="img"></img>
                        <img className="service-img" src={Hinh1} alt="img"></img>
                    </div>
                    <div className="img-container">
                        <img className="service-img" src={Hinh2} alt="img"></img>
                        <img className="service-img" src={Hinh3} alt="img"></img>
                    </div>
                </div>

                <div className="col-md service-info">
                    <div className="content-container">
                        <p className="service-content">
                            - Hệ thống phòng 5 sao dành riêng cho thú cưng của bạn.
                        </p>
                        <p className="service-content">
                            - Các bé sẽ được kiểm tra sức khỏe trước khi vào khách sạn 
                            và cả trong thời gian ở lại đây.
                        </p>
                        <p className="service-content">
                            - Bữa ăn hàng ngày đầy đủ dinh dưỡng đến từ thương hiệu nổi tiếng Eminent.
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
                                <td className="service-table__data">50.000đ/ngày</td>
                            </tr>
                            <tr className="service-table__row">
                                <td className="service-table__data">2 - 4kg</td>
                                <td className="service-table__data">70.000đ/ngày</td>
                            </tr>
                            <tr className="service-table__row">
                                <td className="service-table__data">4 - 7kg</td>
                                <td className="service-table__data">100.000đ/ngày</td>
                            </tr>
                            <tr className="service-table__row">
                                <td className="service-table__data">7 - 10kg</td>
                                <td className="service-table__data">120.000đ/ngày</td>
                            </tr>
                            <tr className="service-table__row">
                                <td className="service-table__data">10 - 15kg</td>
                                <td className="service-table__data">150.000đ/ngày</td>
                            </tr>
                            <tr className="service-table__row">
                                <td className="service-table__data"><i className="fas fa-angle-right"></i> 15kg</td>
                                <td className="service-table__data">200.000đ/ngày</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <Booking />
        </div>
    );
}

export default BoardingService;