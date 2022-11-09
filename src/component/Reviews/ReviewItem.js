import React from "react";
import { FaPenFancy, FaTrashAlt } from "react-icons/fa";

const ReviewItem = ({ person, handleDelete }) => {
  const { reviewer, email, img, message, _id } = person;

  return (
    <div className="w-50 mx-auto">
      <div className="review">
        <img className="img" src={img} alt="" />
        <h4>{reviewer}</h4>

        <div>
          <h4>{message}</h4>
        </div>
        <div>
          <button onClick={() => handleDelete(_id)}>
            <FaTrashAlt />{" "}
          </button>
          <button className="ms-1">
            {" "}
            <FaPenFancy />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
