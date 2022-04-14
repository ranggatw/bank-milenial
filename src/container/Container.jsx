import React from 'react'
import HeaderComp from "../components/Header/HeaderComp";
// import HeaderComp from "../components/Header/HeaderComp";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

function Container({ children }) {
  return (
    <div>
      <HeaderComp />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Container