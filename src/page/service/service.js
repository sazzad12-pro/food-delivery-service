import React, { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";
import "./service.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://assignment-mu-dusky.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="grid mt-3 mb-1">
        {services.map((service) => (
          <ServiceItem service={service}></ServiceItem>
        ))}
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
