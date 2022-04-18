import React from "react";

function InputComp({ labelFor, labelTxt, inputType, id, placeholder }) {
  return (
    <div className="mb-3">
      <label htmlFor={labelFor} className="fw-bold">
        {labelTxt}
      </label>
      <input
        type={inputType}
        className="form-control"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputComp;
