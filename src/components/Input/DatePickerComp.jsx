import React from "react";
import { Form } from "react-bootstrap";

function DatePickerComp() {
  return (
    <div>
      <Form.Group controlId="dob">
        <Form.Label className="m-0 fw-bold">Select Date</Form.Label>
        <Form.Control type="date" name="dob" placeholder="Date of Birth" />
      </Form.Group>
    </div>
  );
}

export default DatePickerComp;
