import React, { useReducer } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import BookingForm from "../../components/bookingform/BookingForm";
import { updateTimes, initializeTimes } from "../../util/utils";

const Booking = () => {
  const [availTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <Header />
      <div className="container">
        <h1>Book a Table</h1>
        <BookingForm availTimes={availTimes} dispatch={dispatch} />
      </div>
      <Footer />
    </>
  );
};

export default Booking;
