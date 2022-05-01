import React, { useEffect, useState } from 'react';
import './Booking.css';
import Line from '../Line';
import axios from 'axios';

function Booking(props) {
    const token = localStorage.getItem('Token');
    const [info, setInfo] = useState({});

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/customers/get-customer-detail',
            {
                headers: {
                    accept: 'application/json',
                    'authorization-token': token
                }
            }
        )
            .then(res => setInfo(res.data))
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }, [token])

    const handleChange = e => {
        const { name, value } = e.target;
        setInfo({
            ...info,
            [name]: value
        });
    }

    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        setFormErrors(validate(info));
        setBookingSuccess(true);
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && bookingSuccess) {
            axios.post('http://127.0.0.1:8000/bookings/booking',
                JSON.stringify({
                    BookType: props.bookType,
                    FullName: info.FullName,
                    Phone: info.Phone,
                    Email: info.Email,
                    PetAmount: info.PetAmount,
                    BookTime: info.BookTime,
                    Note: info.Note
                }),
                {
                    headers:
                    {
                        'Access-Control-Allow-Origin': '*',
                        'accept': 'application/json',
                        'Content-Type': 'application/json',
                        'authorization-token': token,
                    }
                })
                .then(res => console.log(res))
                .catch(function (err) {
                    if (!err?.response) {
                        setFormErrors({
                            server: 'Máy chủ hiện không phản hồi'
                        })
                    } else {
                        setFormErrors({
                            server: 'Đăng ký không thành công'
                        })
                    }
                });
        }
    }, [formErrors, bookingSuccess, info.BookTime, info.Email, info.FullName, info.Note, info.PetAmount, info.Phone, props.bookType, token])


    const validate = (values) => {
        const errors = {};
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if (!values.FullName.trim()) {
            errors.FullName = "Họ và tên không được để trống"
        }

        if (!values.Email) {
            errors.Email = "Email không được để trống"
        } else if (!regex.test(values.Email)) {
            errors.Email = "Email không hợp lệ"
        }

        if (!values.Phone) {
            errors.Phone = "Số điện thoại không được để trống"
        } else if (!values.Phone.match("^\\d{10}$")) {
            errors.Phone = "Số điện thoại không hợp lệ"
        }

        if (!values.PetAmount) {
            errors.PetAmount = "Số lượng thú cưng không được để trống"
        } else if (values.PetAmount <= 0) {
            errors.PetAmount = "Số lượng thú cưng phải lớn hơn 0"
        }

        const now = new Date();
        if (!values.BookTime) {
            errors.BookTime = "Thời gian đặt lịch không được để trống"
        } else if (values.BookTime <= now) {
            errors.BookTime = "Thời gian đặt lịch không hợp lệ"
        }

        return errors;
    }

    return (
        <div className="row booking">
            <p className="booking__heading">Đặt lịch dịch vụ</p>
            <Line />
            {
                Object.keys(formErrors).length === 0 && bookingSuccess === true ?
                    <p className='booking-success'>Cám ơn bạn đã tin tưởng và đặt lịch tại Pet Store. <br /> Chúng tôi sẽ gửi mail xác nhận đến bạn sớm nhất!</p>
                    :
                    <form className="booking-form" id="booking-form" onSubmit={handleSubmit}>
                        <div className="col-md-6 booking-form__container">

                            <div className="booking-ctn">
                                <p className="booking-label">Tên của bạn (*)</p>
                                <input
                                    type="text"
                                    className="booking-input"
                                    name='FullName'
                                    defaultValue={info.FullName}
                                    onChange={handleChange}
                                ></input>
                                {formErrors.FullName && <p className='booking__error'>{formErrors.FullName}</p>}
                            </div>

                            <div className="booking-ctn">
                                <p className="booking-label">Số điện thoại (*)</p>
                                <input
                                    type="text"
                                    className="booking-input"
                                    name='Phone'
                                    onChange={handleChange}
                                    defaultValue={info.Phone}
                                ></input>
                                {formErrors.Phone && <p className='booking__error'>{formErrors.Phone}</p>}
                            </div>


                            <div className="booking-ctn">
                                <p className="booking-label">Email (*)</p>
                                <input
                                    type="text"
                                    className="booking-input"
                                    name='Email'
                                    onChange={handleChange}
                                    defaultValue={info.Email}
                                ></input>
                                {formErrors.Email && <p className='booking__error'>{formErrors.Email}</p>}
                            </div>


                            <div className="booking-ctn">
                                <p className="booking-label">Số lượng thú cưng (*)</p>
                                <input
                                    type="number"
                                    className="booking-input"
                                    name='PetAmount'
                                    onChange={handleChange}
                                    defaultValue={info.PetAmount}
                                ></input>
                                {formErrors.PetAmount && <p className='booking__error'>{formErrors.PetAmount}</p>}
                            </div>

                            <div className="booking-ctn">
                                <p className="booking-label">Thời gian đặt lịch (*)</p>
                                <input
                                    type="datetime-local"
                                    className="booking-input"
                                    name='BookTime'
                                    onChange={handleChange}
                                    defaultValue={info.BookTime}
                                ></input>
                                {formErrors.BookTime && <p className='booking__error'>{formErrors.BookTime}</p>}
                            </div>

                            <div className="booking-ctn">
                                <p className="booking-label">Ghi chú</p>
                                <input
                                    type="text-area"
                                    className="booking-input"
                                    name='Note'
                                    onChange={handleChange}
                                    defaultValue={info.Note}
                                ></input>
                            </div>

                            {formErrors.server && <p className='booking__error'>{formErrors.server}</p>}
                            <input type="submit" value="Đặt lịch" className="booking-btn"></input>
                        </div>
                    </form>
            }
        </div>
    );
}

export default Booking;