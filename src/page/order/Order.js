import React, { useState } from "react";

const Order = () => {
  const [input, setInput] = useState({});
  const handleChange = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/allService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("order placed successfully");
          e.form.reset();
        }
      });
  };

  const handleBlur = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newUser = { ...input };
    newUser[field] = value;
    setInput(newUser);
  };
  return (
    <div className="text-center">
      <form onSubmit={handleChange}>
        <input
          className="w-50"
          onBlur={handleBlur}
          type="text"
          name="name"
          placeholder="name"
        />
        <br />
        <textarea
          className="w-50 mt-3"
          onBlur={handleBlur}
          name="description"
          id=""
          cols="30"
          rows="10"
          placeholder="description"
        ></textarea>
        <br />
        <input
          className="w-50 mt-3"
          onBlur={handleBlur}
          type="text"
          name="price"
          placeholder="price"
        />
        <br />
        <input
          className="w-50 mt-3"
          onBlur={handleBlur}
          type="text"
          name="image"
          placeholder="image link"
        />
        <br />
        <input
          className="w-50 mt-3"
          onBlur={handleBlur}
          type="text"
          name="rating"
          id=""
          placeholder="rating"
        />
        <br />
        <button className="btn btn-success mt-3 w-50 mb-5">add Service</button>
      </form>
    </div>
  );
};

export default Order;
