import React from 'react';
import './ServiceDetail.css';
import Booking from './Booking';
import Heading from '../Heading';
import Hinh from '../../assets/images/bathing1.jpg';
import Hinh1 from '../../assets/images/grooming1.jpg';
import Hinh2 from '../../assets/images/boarding2.jpg';
import Hinh3 from '../../assets/images/walking3.jpg';
import Header from '../Header/Header'

function Combo3() {
    return (
        <>
            <Header />
            <div className="container service-detail">
                <div className="row">
                    <Heading mixin="What we have?" title="Gói tất cả các dịch vụ hiện có tại Pet Store" />
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
                                - Các bé sẽ được kiểm tra sức khỏe trước khi vào khách sạn
                                và sau đó sẽ được tắm rửa sạch sẽ.
                            </p>
                            <p className="service-content">
                                - Sau khi tắm, thú cưng của bạn sẽ được cắt, cạo lông,
                                tạo kiểu hoặc nhuộm màu một cách nghệ thuật để giúp bé luôn xinh đẹp.
                            </p>
                            <p className="service-content">
                                - Các bé sẽ được nghỉ ngơi và thưởng thức bữa ăn hàng ngày 
                                đầy đủ dinh dưỡng đến từ thương hiệu nổi tiếng Eminent.
                            </p>
                            <p className="service-content">
                                - Tất cả thú cưng sẽ được trang bị GPS, đi đến nơi mát mẻ, được cập nhật ảnh và
                                video thường xuyên để bạn tiện theo dõi.
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
                                        <td className="service-table__data">300.000đ/gói (1 ngày trông hộ)</td>
                                    </tr>
                                    <tr className="service-table__row">
                                        <td className="service-table__data">2 - 4kg</td>
                                        <td className="service-table__data">360.000đ/gói (1 ngày trông hộ)</td>
                                    </tr>
                                    <tr className="service-table__row">
                                        <td className="service-table__data">4 - 7kg</td>
                                        <td className="service-table__data">470.000đ/gói (1 ngày trông hộ)</td>
                                    </tr>
                                    <tr className="service-table__row">
                                        <td className="service-table__data">7 - 10kg</td>
                                        <td className="service-table__data">580.000đ/gói (1 ngày trông hộ)</td>
                                    </tr>
                                    <tr className="service-table__row">
                                        <td className="service-table__data">10 - 15kg</td>
                                        <td className="service-table__data">700.000đ/gói (1 ngày trông hộ)</td>
                                    </tr>
                                    <tr className="service-table__row">
                                        <td className="service-table__data"><i className="fas fa-angle-right"></i> 15kg</td>
                                        <td className="service-table__data">1.030.000đ/gói (1 ngày trông hộ)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <Booking bookType="Combo3" />
            </div>
        </>
    );
}

export default Combo3;