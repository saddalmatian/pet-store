import React from 'react';
import './ServiceDetail.css';
import Booking from './Booking';
import Heading from '../Heading';
import Hinh from '../../assets/images/boarding.png';
import Hinh1 from '../../assets/images/boarding1.jpg';
import Hinh2 from '../../assets/images/walking2.png';
import Hinh3 from '../../assets/images/walking3.jpg';
import Header from '../Header/Header'

function Combo2() {
    return (
        <>
            <Header />
            <div className="container service-detail">
                <div className="row">
                    <Heading mixin="What we have?" title="Gói dịch vụ trông hộ và dắt đi dạo" />
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
                            <p className="service-content">
                                - Tất cả thú cưng sẽ được trang bị GPS, được cập nhật ảnh và
                                video thường xuyên để bạn tiện theo dõi.
                            </p>
                            <p className="service-content">
                                - Các bé sẽ được đến tham quan những nơi mát mẻ, trong lành.
                                Được gặp gỡ và kết bạn mới.
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
                                        <td className="service-table__data">90.000đ/ngày (30 phút đi dạo)</td>
                                    </tr>
                                    <tr className="service-table__row">
                                        <td className="service-table__data">2 - 4kg</td>
                                        <td className="service-table__data">110.000đ/ngày (30 phút đi dạo)</td>
                                    </tr>
                                    <tr className="service-table__row">
                                        <td className="service-table__data">4 - 7kg</td>
                                        <td className="service-table__data">140.000đ/ngày (30 phút đi dạo)</td>
                                    </tr>
                                    <tr className="service-table__row">
                                        <td className="service-table__data">7 - 10kg</td>
                                        <td className="service-table__data">160.000đ/ngày (30 phút đi dạo)</td>
                                    </tr>
                                    <tr className="service-table__row">
                                        <td className="service-table__data">10 - 15kg</td>
                                        <td className="service-table__data">190.000đ/ngày (30 phút đi dạo)</td>
                                    </tr>
                                    <tr className="service-table__row">
                                        <td className="service-table__data"><i className="fas fa-angle-right"></i> 15kg</td>
                                        <td className="service-table__data">240.000đ/ngày (30 phút đi dạo)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <Booking bookType="Combo2"/>
            </div>
        </>
    );
}

export default Combo2;