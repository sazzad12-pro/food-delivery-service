import React from "react";
import order from "../../image/feature_icon.svg";
import quality from "../../image/feature_icon22.svg";
import time from "../../image/feature_icon3.svg";

const Item = () => {
  return (
    <div className="mt-5 mb-5 mx-5 bg-light">
      <div className="service">
        <div>
          <img src={order} alt="" />
          <h2 className="fw-bold">Easy to order</h2>
        </div>

        <div>
          <img src={quality} alt="" />
          <h2 className="fw-bold">Best Food Quality</h2>
        </div>
        <div>
          <img src={time} alt="" />
          <h2 className="fw-bold">Fastest Delivery</h2>
        </div>
      </div>
    </div>
  );
};

export default Item;
