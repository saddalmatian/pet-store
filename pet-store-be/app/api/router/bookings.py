from fastapi import APIRouter, Header
from app.api.models.schemas import \
    bookings as _schemas_booking
from app.api.services import bookings \
    as _service_booking
from app.utils.security import get_username_from_token
router = APIRouter(
    prefix="/bookings",
    tags=["Booking"]
)


@router.post(
    "/booking",
)
async def booking(
    booking_in: _schemas_booking.BookingIn,
    authorization_token: str = Header(None),
):
    username = get_username_from_token(authorization_token)
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
