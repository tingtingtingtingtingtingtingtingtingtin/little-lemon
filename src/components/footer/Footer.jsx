import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <img src="" alt="footer logo" />
      <ul className="links">
        <li>
          <h3>Doormat Navigation</h3>
        </li>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
      <ul className="links">
        <li>
          <h3>Contact</h3>
        </li>
        <li>Address</li>
        <li>Phone Number</li>
        <li>Email</li>
      </ul>
      <ul className="links">
        <li>
          <h3>Social Media</h3>
        </li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Yelp</li>
      </ul>
    </footer>
  );
};

export default Footer;
