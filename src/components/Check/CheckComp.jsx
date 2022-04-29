import React, { useState } from "react";

function CheckComp({ lable, onChange, checked }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <input
        className="form-check-input me-2"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        onChange={onChange}
        checked={checked}
      />
      <label className="form-check-label">{lable}</label>
    </div>
  );
}

export default CheckComp;
