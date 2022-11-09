import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../UseContext/UseContext";

const ViewDetails = () => {
  const [{ name, price, description, image, _id }] = useLoaderData();
  const { user } = useContext(AuthContext);

  const hendleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const email = user?.email || "unregister";
    const message = form.message.value;

    const review = {
      reviewId: _id,
      reviewName: name,
      reviewer: userName,
      email,
      message,
    };
    fetch();
  };

  return (
    <div>
      <div className="mt-3 mb-1">
        <h1 className="fw-bolder">{name}</h1>
        <Card.Img className="w-25" variant="top" src={image} />
        <Card.Text className="w-50">{description}</Card.Text>
      </div>
      {user ? (
        <div>
          <h6>people say about {name}</h6>
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
              className="w-50"
              defaultValue={user.email}
              readOnly
            />
            <br />
            <textarea
              className="w-50"
              placeholder={`please say something ${name}`}
              name="message"
            ></textarea>
            <br />
            <input type="submit" value="Add Review" />
          </form>
        </div>
      ) : (
        "Please login to add a review"
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
