import React from "react";
import Service from "../../page/service/service";
import About from "../About/About";
import Banner from "../banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Service></Service>
    </div>
  );
};

export default Home;
