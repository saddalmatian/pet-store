
from app.api.models.domains import (
    bookings as _domain_booking
)
from app.api.models.schemas import bookings as _schemas_booking
from app.utils.db_helper import engine, generate_ksuid
from sqlmodel import Session, select
from app.utils.security import password
import smtplib
from email.message import EmailMessage


def get_all_bookings(
    book_type: str
):
    booking = _domain_booking.BookingSQL
    with Session(engine) as session:
        response = []
        statement = select(booking)
        if book_type:
            statement = select(booking).where(booking.book_type == book_type)
        result = session.exec(statement)
        for item in result:
            response.append(item)
    return response


def new_booking(
    user_id: str, booking_in: _schemas_booking.BookingIn
):
    book_id = generate_ksuid()
    book_type = booking_in.book_type.value
    _ = delattr(booking_in, 'book_type')
    receiver = booking_in.email
    book_time = booking_in.book_time
    booking = _domain_booking.BookingSQL(
        **booking_in.dict(by_alias=True),
        **{
            "BookId": book_id,
            "CustomerId": user_id,
            "Total": 0,
            "BookStatus": 'Chưa xác nhận',
            "BookType": book_type,
            "FinishDate": None
        }
    )
    with Session(engine) as session:
        session.add(booking)
        session.commit()
    smtp_server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    smtp_server.ehlo()
    sender = 'saddalmatian@gmail.com'
    smtp_server.login(sender, password)
    msg = EmailMessage()
    msg['Subject'] = 'Thư xác nhận từ cửa hàng thú cưng'
    msg['From'] = sender
    msg['To'] = receiver
    msg.set_content(f"""\
    Cảm ơn bạn đã đặt lịch cho thú cưng của bạn vào lúc {book_time}

    Hãy đưa thư điện tử này cho nhân viên của chúng tôi kiểm tra khi bạn đến cửa hàng

    Xin cảm ơn bạn

    Petstore.
    """)
    # smtp_server.sendmail(sender, receiver, message)
    smtp_server.send_message(msg)
    smtp_server.close()
    return {"Message": "Booking successfully"}