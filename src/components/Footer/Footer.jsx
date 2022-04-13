import React from "react";
import { Row, Col } from "react-bootstrap";
import "./footer.css";

function Footer() {
  return (
    <Row className="text-center ">
      <Col className="footer-wrapper">
        <p className="my-3 txt-footer">
          Bank Milenial | Hak Cipta Dilindungi Oleh Undang-Undang
        </p>
      </Col>
      {/* <Col className="justify-content-center">adsd</Col> */}
    </Row>
  );
}

export default Footer;
