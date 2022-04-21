import React from "react";
import { useNavigate } from "react-router-dom";
import "./finish.css";

function FinisihPage() {
  const navigate = useNavigate();
  const backToStart = () => {
    navigate("/");
  };
  return (
    <div
      className=""
      style={{
        minHeight: "calc(100vh - 137.5px)",
        paddingTop: "15rem",
      }}
    >
      <div className="d-flex justify-content-center">
        <div style={{ width: "40vw" }}>
          <div>
            <h4 className="fw-bold text-center">
              Data Anda telah tersimpan silahkan melakukan setoran awal sesuai
              instruksi yang dikirimkan pada email Anda
            </h4>
          </div>
          <p
            onClick={backToStart}
            style={{ paddingTop: "5rem", fontSize: "20px" }}
            className="text-center bye-bye"
          >
            Anda Bisa meninggalkan halaman ini
          </p>
        </div>
      </div>
    </div>
  );
}

export default FinisihPage;
