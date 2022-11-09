import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const [{ name, price, description, image }] = useLoaderData();

  return (
    <div className="mt-3 mb-1">
      <Card style={{ width: "60rem", margin: "auto" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title> {name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ViewDetails;
