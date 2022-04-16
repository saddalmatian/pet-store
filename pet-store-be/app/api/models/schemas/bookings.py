from app.api.models.domains import (
    bookings as _booking_domain,
    customers as _customer_domain,
)


class BookingIn(
    _customer_domain.FullName, _customer_domain.Email,
    _customer_domain.Phone, _booking_domain.PetAmount,
    _booking_domain.Note, _booking_domain.BookTime,
):
    pass


class BookingFinish(
    _booking_domain.BookId, _booking_domain.Total
):
    pass
