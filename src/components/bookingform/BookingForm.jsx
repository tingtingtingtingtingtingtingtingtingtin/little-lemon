import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.scss";
import { useFormik } from "formik";
import { submitAPI } from "../../util/utils";
import * as Yup from "yup";

const BookingForm = ({ availTimes, dispatch }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      date: new Date().toLocaleDateString("en-CA"),
      time: availTimes.times[0],
      guests: 1,
      occasion: "birthday",
    },
    onSubmit: (values) => {
      const response = submitAPI(values);
      if (response) {
        localStorage.setItem("Bookings", JSON.stringify(values));
        navigate("/confirmation");
      }
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Date is required"),
      time: Yup.string().oneOf(availTimes.times).required("Time is required"),
      guests: Yup.number()
        .min(1, "Must be at least 1")
        .max(10, "Must be at most 10")
        .required("Number of guests is required"),
      occasion: Yup.string()
        .oneOf(["birthday", "engagement", "anniversary"])
        .required("Occasion is required"),
    }),
  });

  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", date: new Date(formik.values.date) });
  }, [formik.values.date, dispatch]);

  return (
    <div>
      <form onSubmit={formik.handleSubmit} noValidate>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          data-testid="res-date"
          {...formik.getFieldProps("date")}
        />
        {formik.touched.date && formik.errors.date ? (
          <div>{formik.errors.date}</div>
        ) : null}

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          data-testid="res-time"
          {...formik.getFieldProps("time")}
        >
          {availTimes.times.map((availTime, index) => (
            <option key={index} value={availTime}>
              {availTime}
            </option>
          ))}
        </select>
        {formik.touched.time && formik.errors.time ? (
          <div>{formik.errors.time}</div>
        ) : null}

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          data-testid="guests"
          {...formik.getFieldProps("guests")}
        />
        {formik.touched.guests && formik.errors.guests ? (
          <div data-testid="guests-error">{formik.errors.guests}</div>
        ) : null}

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          data-testid="occasion"
          {...formik.getFieldProps("occasion")}
        >
          <option value="birthday">Birthday</option>
          <option value="engagement">Engagement</option>
          <option value="anniversary">Anniversary</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion ? (
          <div>{formik.errors.occasion}</div>
        ) : null}

        <input type="submit" value="Make Your Reservation" />
      </form>
    </div>
  );
};

export default BookingForm;
