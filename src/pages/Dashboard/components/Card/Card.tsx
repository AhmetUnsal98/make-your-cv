import React from "react";
import "./card.scss";
import img from "../../../../assets/dash.png";
const Card = () => {
  return (
    <div className="card">
      <div className="card-img-container">
        <img src={img}></img>
      </div>
      <div className="card-info-container">
        <span>Card Title</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, vero
          minus.
        </p>
      </div>
    </div>
  );
};

export default Card;
