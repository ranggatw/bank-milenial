import React from "react";

function ButtonNext({ title, onClick }) {
  return (
    <button onClick={onClick} className="btn btn-primary btn-lg ">
      {title}
    </button>
  );
}

export default ButtonNext;
