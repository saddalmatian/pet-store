
from app.api.models.domains import (
    bookings as _domain_booking
)
from app.api.models.schemas import bookings as _schemas_booking
from app.utils.db_helper import engine, generate_ksuid
from sqlmodel import Session


def new_booking(
    user_id: str, booking_in: _schemas_booking.BookingIn
):
    book_id = generate_ksuid()
    booking = _domain_booking.BookingSQL(
        **booking_in.dict(by_alias=True),
        **{
            "BookId": book_id,
            "CustomerId": user_id,
            "Total": 0,
            "BookStatus": 'New'
        }
    )
    with Session(engine) as session:
        session.add(booking)
        session.commit()
    return {"Message": "Booking successfully"}
