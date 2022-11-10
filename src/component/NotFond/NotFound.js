import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-dark ">
      <div className="text-center">
        <h1 className="fw-bold text-white">404</h1>
        <h4 className="text-white">
          The page you are looking for doesn't exist
        </h4>
        <Link to="/">
          <Button variant="primary">Back to home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
