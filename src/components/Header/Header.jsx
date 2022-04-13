import React from "react";
import { Row, Col } from "react-bootstrap";
import "./header.css";
import Logo from "../../assets/logo_bank.png";

function Header() {
  return (
    <Row className="text-center">
      <Col>
        <div className="header-wrapper">
          <img style={{ width: "100px", height: "80px" }} src={Logo} alt="" />
          <span className="txt-header">Bank Milenial</span>
        </div>
      </Col>
    </Row>
  );
}

export default Header;
