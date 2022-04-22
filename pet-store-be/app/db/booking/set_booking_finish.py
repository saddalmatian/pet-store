from fastapi import HTTPException
from app.api.models.schemas import bookings as _schemas_booking
from app.api.models.domains import bookings as _domains_booking
from app.utils.db_helper import engine
from sqlmodel import Session, select
import datetime


def set_booking_finish(
    book_finish_in: _schemas_booking.BookingFinish
):
    book_id = book_finish_in.book_id
    total = book_finish_in.total
    status = 'Đã giao'
    booking = _domains_booking.BookingSQL
    finish_date = datetime.datetime.now()
    with Session(engine) as session:
        statement = select(booking).where(booking.book_id == book_id)
        try:
            result = session.exec(statement).one()
            result.book_status = status
            result.total = total
            result.finish_date = finish_date
            session.add(result)
            session.commit()
        except Exception:
            raise HTTPException(status_code=404, detail='Booking not found')
    return {
        "Message": "Set finish booking completed !"
    }
