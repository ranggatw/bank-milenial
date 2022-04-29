import React from "react";
import UploadImage from "../../components/UploadFile/UploadImage";
import UploadImageEktp from "../../components/UploadFile/UploadImageEktp";

function UploadFotoBersama() {
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
        <UploadImageEktp />
      </div>
    </div>
  );
}

export default UploadFotoBersama;
