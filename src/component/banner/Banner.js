import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div>
      <div className="food-image"></div>
      <div>
        <h1 className="hero-text">
          Healthy Food
          <br />
          Delivery Service
        </h1>
        <div className="food-btn">
          <button>choes your meal</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
