import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../UseContext/UseContext";

const ViewDetails = () => {
  const [{ name, price, description, image, _id }] = useLoaderData();
  const { user } = useContext(AuthContext);
  const [userReview, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReview(data))
      .catch((err) => console.error(err));
  }, []);

  const hendleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const email = user?.email || "unregister";
    const img = user?.photoURL;
    const message = form.message.value;

    const review = {
      reviewId: _id,
      reviewName: name,
      reviewer: userName,
      email,
      message,
      img,
    };
    fetch("https://assignment-sazzad12-pro.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("order placed successfully");

          form.reset();
        }
      });
  };

  return (
    <div>
      <div className="mt-3 mb-1">
        <h1 className="fw-bolder">{name}</h1>
        <Card.Img className="w-50" variant="top" src={image} />
        <Card.Text className="w-50">{description}</Card.Text>
      </div>
      <hr />
      <div>
        <h6>people say about {name}</h6>
        {userReview.map((u) => (
          <>
            <img key={u._id} className="img" src={u.img} alt="" />
            <Card.Text>{u.message}</Card.Text>
          </>
        ))}
      </div>
      {user ? (
        <div>
          <form onSubmit={hendleReview}>
            <input
              type="text"
              name="name"
              id=""
              className="w-50"
              placeholder="Enter your Name"
            />
            <br />

            <input
              type="email"
              name="email"
              id=""
              className="w-50 mt-1"
              defaultValue={user.email}
              readOnly
            />
            <br />
            <textarea
              className="w-50 mt-1"
              placeholder={`please say something ${name}`}
              name="message"
            ></textarea>
            <br />
            <input
              className="btn btn-success mt-1 mb-1"
              type="submit"
              value="Review post"
            />
          </form>
        </div>
      ) : (
        <div>
          Please{" "}
          <Link className="text-decoration-none" to="/login">
            Login
          </Link>{" "}
          to add a review
        </div>
      )}
    </div>
  );
};

export default ViewDetails;

/* 
 
 <Card style={{ width: "60rem", margin: "auto" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title> {name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
 */
