import React from "react";
import "./commingSoon.css";
import Logo from "../../assets/logo_bank.png";

function CommingSoon() {
  return (
    <div className="welcome">
      <div className="wrapper">
        <h1 className="heeading-text">Bank Milenial</h1>
        <div className="text-center">
          <img className="img-comming " src={Logo} />
        </div>
        <h1 className="heeading-text">
          coming soon<span className="dot">.</span>
        </h1>
        <hr />
        <p className="date-text">on April 2022</p>
      </div>
    </div>
  );
}

export default CommingSoon;
