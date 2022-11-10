import React, { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";
import "./service.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://assignment-mu-dusky.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(true);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="fw-bold text-dark">Our service</h2>
      </div>
      <div className="grid mt-3 mb-1">
        {loading ? (
          services.map((service) => (
            <ServiceItem key={service._id} service={service}></ServiceItem>
          ))
        ) : (
          <ClipLoader
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
      </div>
      <div className="text-center mt-3 mb-3">
        <Link to="/allservice">
          <Button variant="success">See All</Button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
