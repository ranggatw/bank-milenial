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
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="86"
                height="86"
                fill="currentColor"
                class="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
            </div>
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
