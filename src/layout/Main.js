import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../page/shared/Footer";
import Header from "../page/shared/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
