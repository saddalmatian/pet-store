import React from 'react';
import './ServiceDetail.css';
import Booking from './Booking';
import Heading from '../Heading';
import Hinh from '../../assets/images/walking.jpg';
import Hinh1 from '../../assets/images/walking1.jpg';
import Hinh2 from '../../assets/images/walking2.png';
import Hinh3 from '../../assets/images/walking3.jpg';
import Header from '../Header/Header';


function WalkingService() {
    return (
        <>
            <Header />
            <div className="container service-detail">
                <div className="row">
                    <Heading mixin="What we have?" title="Những đảm bảo khi bạn đặt lịch dắt thú cưng đi dạo tại Pet Store" />
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
                                - Tất cả thú cưng sẽ được trang bị GPS, được cập nhật ảnh và
                                video thường xuyên để bạn tiện theo dõi.
                            </p>
                            <p className="service-content">
                                - Tất cả nhân viên của chúng tôi đều phải vượt qua các khóa học
                                và bài kiểm tra kỹ năng thực hành trước khi bắt đầu làm việc.
                            </p>
                            <p className="service-content">
                                - Các bé sẽ được đến tham quan những nơi mát mẻ, trong lành.
                                Được gặp gỡ và kết bạn mới.
                            </p>
                            <p className="service-content">
                                - Chi phí ước tính cho dịch vụ này là 50.000đ/30 phút. Để biết thêm thông tin
                                về nơi đến cũng như chi phí chính xác, vui lòng mang bé đến Pet Store để  tiện trao đổi nhé.
                            </p>
                        </div>
                    </div>
                </div>

                <Booking bookType="Walking"/>
            </div>
        </>
    );
}

export default WalkingService;