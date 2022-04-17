from fastapi import HTTPException
from app.utils.db_helper import get_userid_from_username
from app.db.booking.create_booking import new_booking, get_all_bookings
from app.db.booking.set_booking_finish import set_booking_finish
from app.api.models.schemas import bookings as _schemas_booking
from app.utils.security import is_employee_or_customer


def booking(
    username: str, booking_in: _schemas_booking.BookingIn,
):
    user_id = get_userid_from_username(username, is_customer=True)
    pet_amount = booking_in.pet_amount
    if pet_amount < 1:
        raise HTTPException(
            status_code=400, detail="Pet amount must greater than 0"
        )
    response = new_booking(
        user_id, booking_in
    )
    return response


def finish_booking(
    username: str, book_finish_in: _schemas_booking.BookingFinish,
):
    user = is_employee_or_customer(username)
    if user == 'employee':
        response = set_booking_finish(
            book_finish_in
        )
        return response


def get_all_booking(
    username: str, book_type: str
):
    user = is_employee_or_customer(username)
    if user == 'employee':
        response = get_all_bookings(book_type)
        return response
