import React from "react";
import img from "../../../../assets/dash.png";
import "./banner.scss";

interface BannerProps {
  direction: string;
}

const Banner: React.FC<BannerProps> = ({ direction }) => {
  return (
    <div
      className="banner"
      style={{ flexDirection: direction === "right" ? "row" : "row-reverse" }}
    >
      <div className="banner-info">
        <h1>Why You Choose Us</h1>
        <h3>After all lorem dolar</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum
          dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </div>
      <div className="banner-img">
        <img src={img}></img>
      </div>
    </div>
  );
};

export default Banner;
