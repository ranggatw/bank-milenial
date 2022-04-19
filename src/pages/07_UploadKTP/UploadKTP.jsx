import React from "react";
import UploadImage from "../../components/UploadFile/UploadImage";

function UploadKTP() {
  return (
    <div
      className=""
      style={{
        // height: "calc(100vh - 137.5px)",
        minHeight: "calc(100vh - 137.5px)",
        paddingTop: "5rem",
      }}
    >
      <div>
        <UploadImage />
      </div>
    </div>
  );
}

export default UploadKTP;
