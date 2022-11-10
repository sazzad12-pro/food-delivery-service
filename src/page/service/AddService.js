import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceShow from "./ServiceShow";

const AddService = () => {
  const services = useLoaderData();
  return (
    <div className="grid">
      {services?.map((service) => (
        <ServiceShow key={service._id} service={service}></ServiceShow>
      ))}
    </div>
  );
};

export default AddService;
