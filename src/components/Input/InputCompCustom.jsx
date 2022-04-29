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
    <div>
        <label htmlFor={labelFor} className="fw-bold">
          {labelTxt}
        </label>
      <div className=" input-group mb-3">
        <span className="input-group-text">Rp</span>
        <input
          {...inputProps}
          onChange={onChange}
          value={value}
          className="form-control"
        />
      </div>
    </div>
  );
}

export default InputComp;
