import React from "react";

function InputComp({
  labelFor,
  labelTxt,
  inputType,
  placeholder,
  inputProps,
  onChange,
  value,
}) {
  return (
    <div className="mb-3">
      <label htmlFor={labelFor} className="fw-bold">
        {labelTxt}
      </label>
      <input
        {...inputProps}
        onChange={onChange}
        value={value}
        className="form-control"
      />
    </div>
  );
}

export default InputComp;
