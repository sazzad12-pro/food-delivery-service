import React from "react";
import Service from "../../page/service/service";
import About from "../About/About";
import Item from "../About/Item";
import Banner from "../banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Item></Item>
    </div>
  );
};

export default Home;
