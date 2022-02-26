import './Booking.css';
import Line from '../Line';

function Booking() {

    return (
        <div className="row booking">
            <p className="booking__heading">Booking</p>
            <Line />
            <form className="booking-form" id="booking-form">
                <div className="col-md-6 booking-form__container">
                    <p className="booking-label">Your name (*)</p>
                    <input type="text" className="booking-input"></input>
                    <p className="booking-label">Your number phone (*)</p>
                    <input type="text" className="booking-input"></input>
                    <p className="booking-label">Your email (*)</p>
                    <input type="text" className="booking-input"></input>
                    <p className="booking-label">Pet amount (*)</p>
                    <input type="number" className="booking-input"></input>
                    <p className="booking-label">Booking time (*)</p>
                    <input type="datetime-local" className="booking-input"></input>
                    <p className="booking-label">Note</p>
                    <input type="text-area" className="booking-input"></input>
                    <input type="button" value="Make an appoinment" className="booking-btn"></input>
                </div>
            </form>
        </div>
    );
}

export default Booking;