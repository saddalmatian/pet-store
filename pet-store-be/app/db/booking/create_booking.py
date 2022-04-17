
from app.api.models.domains import (
    bookings as _domain_booking
)
from app.api.models.schemas import bookings as _schemas_booking
from app.utils.db_helper import engine, generate_ksuid
from sqlmodel import Session, select


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

    booking = _domain_booking.BookingSQL(
        **booking_in.dict(by_alias=True),
        **{
            "BookId": book_id,
            "CustomerId": user_id,
            "Total": 0,
            "BookStatus": 'New',
            "BookType": book_type,
            "FinishDate": None
        }
    )
    with Session(engine) as session:
        session.add(booking)
        session.commit()
    return {"Message": "Booking successfully"}
