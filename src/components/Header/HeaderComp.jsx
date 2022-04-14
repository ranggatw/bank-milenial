import React from "react";
import { Row, Col } from "react-bootstrap";
import "./header.css";
import Logo from "../../assets/logo_bank.png";

function HeaderComp() {
  return (
    <div className="header-comp text-center">
      <div className="header-wrapper">
        <img style={{ width: "100px", height: "80px" }} src={Logo} alt="" />
        <span className="txt-header">Bank Milenial</span>
      </div>
    </div>
  );
}

export default HeaderComp;
