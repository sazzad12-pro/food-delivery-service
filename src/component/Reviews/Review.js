import React, { useEffect, useState } from "react";

import ReviewItem from "./ReviewItem";

const Review = () => {
  const [userReview, setUserReview] = useState([]);

  useEffect(() => {
    fetch("https://assignment-sazzad12-pro.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setUserReview(data));
  }, []);

  const handleDelete = (id) => {
    const procced = window.confirm(`are sure to delete `);
    if (procced) {
      fetch(`https://assignment-sazzad12-pro.vercel.app/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const reming = userReview?.filter((re) => re._id !== id);
            setUserReview(reming);
          }
        });
    }
  };

  return (
    <div>
      {userReview.map((person) => (
        <ReviewItem
          key={person._id}
          person={person}
          handleDelete={handleDelete}
        ></ReviewItem>
      ))}
    </div>
  );
};

export default Review;

/* 
  
*/
