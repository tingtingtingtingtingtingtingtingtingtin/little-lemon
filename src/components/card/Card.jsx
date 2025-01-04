import React from "react";
import "./Card.scss";

const Card = ({ src, title, text }) => {
  return (
    <div className="container">
      <div className="image">
        <img src={src} alt={title} />
      </div>
      <div className="text-box">
        <h2>{title}</h2>
        <p>{text}</p>
        <a href="/menu-item">Check it out!</a>
      </div>
    </div>
  );
};

export default Card;
