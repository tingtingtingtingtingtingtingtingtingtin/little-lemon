import React, { useReducer } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import BookingForm from "../../components/bookingform/BookingForm";
import { updateTimes, initializeTimes } from "../../util/utils";
import "./Booking.scss"

const Booking = () => {
  const [availTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div className="small-page">
      <Header />
      <div className="b-container">
        <h1>Book a Table</h1>
        <BookingForm availTimes={availTimes} dispatch={dispatch} />
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
