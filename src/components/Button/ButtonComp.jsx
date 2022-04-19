import React from "react";

function ButtonComp({ title, onClick, className, disabled }) {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {title}
    </button>
  );
}

export default ButtonComp;
