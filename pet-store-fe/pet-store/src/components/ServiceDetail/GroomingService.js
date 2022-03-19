import React from 'react';
import './ServiceDetail.css';
import Booking from './Booking';
import Heading from '../Heading';
import Hinh from '../../assets/images/grooming.png';
import Hinh1 from '../../assets/images/grooming1.jpg';
import Hinh2 from '../../assets/images/grooming5.png';
import Hinh3 from '../../assets/images/grooming3.jpg';


function GroomingService() {
    return (
        <div className="container service-detail">
            <div className="row">
                <Heading mixin="What we have?" title="Thú cưng sẽ được chăm sóc như thế nào với dịch vụ cắt tỉa lông?" />
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
                            - Tại Pet Store, thú cưng của bạn sẽ được cắt, cạo lông,
                            tạo kiểu hoặc nhuộm màu một cách nghệ thuật để giúp bé luôn xinh đẹp.
                        </p>
                        <p className="service-content">
                            - Với đội ngũ nhân viên tay nghề cao, chúng tôi cam đoan thú cưng của
                            bạn sẽ được cắt và giũa móng sạch sẽ và an toàn.
                        </p>
                    </div>

                    <div className="table-container">
                        <table className="service-table">
                            <thead>
                                <tr className="service-table__row">
                                    <th className="service-table__heading">Weight</th>
                                    <th className="service-table__heading">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="service-table__row">
                                    <td className="service-table__data"><i className="fas fa-angle-left"></i> 2kg</td>
                                    <td className="service-table__data">150.000đ</td>
                                </tr>
                                <tr className="service-table__row">
                                    <td className="service-table__data">2 - 4kg</td>
                                    <td className="service-table__data">170.000đ</td>
                                </tr>
                                <tr className="service-table__row">
                                    <td className="service-table__data">4 - 7kg</td>
                                    <td className="service-table__data">200.000đ</td>
                                </tr>
                                <tr className="service-table__row">
                                    <td className="service-table__data">7 - 10kg</td>
                                    <td className="service-table__data">250.000đ</td>
                                </tr>
                                <tr className="service-table__row">
                                    <td className="service-table__data">10 - 15kg</td>
                                    <td className="service-table__data">300.000đ</td>
                                </tr>
                                <tr className="service-table__row">
                                    <td className="service-table__data"><i className="fas fa-angle-right"></i> 15kg</td>
                                    <td className="service-table__data">400.000đ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Booking />
        </div>
    );
}

export default GroomingService;