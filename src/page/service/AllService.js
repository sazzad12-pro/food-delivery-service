import React from "react";
import { useLoaderData } from "react-router-dom";

const AllService = () => {
  const allServices = useLoaderData();
  return (
    <div>
      <h1>all service{allServices.length}</h1>
    </div>
  );
};

export default AllService;
