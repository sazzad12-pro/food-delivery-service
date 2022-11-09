import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceItem from "./ServiceItem";

const AllService = () => {
  const allServices = useLoaderData();
  return (
    <div className="grid mt-3 mb-1">
      {allServices.map((service) => (
        <ServiceItem key={service._id} service={service}></ServiceItem>
      ))}
    </div>
  );
};

export default AllService;
