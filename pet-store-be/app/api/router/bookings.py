from fastapi import APIRouter, Header
from app.api.models.schemas import \
    bookings as _schemas_booking
from app.api.services import bookings \
    as _service_booking
from app.utils.security import get_username_from_token
from fastapi import BackgroundTasks
import smtplib
from email.message import EmailMessage
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig


router = APIRouter(
    prefix="/bookings",
    tags=["Booking"]
)
conf = ConnectionConfig(
    MAIL_USERNAME="saddalmatian@gmail.com",
    MAIL_PASSWORD="371881214a",
    MAIL_FROM="saddalmatian@gmail.com",
    MAIL_PORT=587,
    MAIL_SERVER="smtp.gmail.com",
    MAIL_FROM_NAME="Petstore",
    MAIL_TLS=True,
    MAIL_SSL=False,
)
fm = FastMail(conf)


@router.get(
    "/get-all-booking",
)
async def get_all_booking(
    book_type: str = '',
    authorization_token: str = Header(None),
):
    username = get_username_from_token(authorization_token)
    response = _service_booking.get_all_booking(
        username, book_type
    )
    return response


@router.post(
    "/booking",
)
async def booking(
    booking_in: _schemas_booking.BookingIn,
    background_tasks: BackgroundTasks,
    authorization_token: str = Header(None),
):
    username = get_username_from_token(authorization_token)
    book_time = booking_in.book_time
    message = f"""\
    Cảm ơn bạn đã đặt lịch cho thú cưng của bạn vào lúc {book_time}

    Hãy đưa thư điện tử này cho nhân viên của chúng tôi kiểm tra khi bạn đến cửa hàng

    Xin cảm ơn bạn

    Petstore.
    """
    message = MessageSchema(
        subject="Thư xác nhận từ cửa hàng thú cưng",
        recipients=[booking_in.email],
    )
    fm = FastMail(conf)
    background_tasks.add_task(
        fm.send_message, message
    )
    response = _service_booking.booking(
        username, booking_in
    )
    return response


@router.post(
    "/finish-booking",
)
async def finish_booking(
    book_finish_in: _schemas_booking.BookingFinish,
    authorization_token: str = Header(None),
):
    username = get_username_from_token(authorization_token)
    response = _service_booking.finish_booking(
        username, book_finish_in
    )
    return response
