import React from "react";
import { useNavigate } from "react-router-dom";

function PendidikanTerakhir() {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/informasi-pekerjaan");
  };

  return (
    <div
      className=""
      style={{
        // height: "calc(100vh - 137.5px)",
        minHeight: "calc(100vh - 137.5px)",
        paddingTop: "5rem",
      }}
    >
      <div className="text-center row">
        <h5 className="mt-5">
          <strong> Pendidikan Terakhir </strong>
        </h5>
        <div className="col-4 mx-auto">
          <p>Pilih jenjang pendidikan terakhir yang telah anda selesaikan </p>
          <button
            onClick={nextPage}
            className="mt-3 btn btn-outline-secondary"
            style={{ width: "100%" }}
          >
            Master/Doktor
          </button>
          <button
            onClick={nextPage}
            className="mt-3 btn btn-outline-secondary"
            style={{ width: "100%" }}
          >
            Sarjana
          </button>
          <button
            onClick={nextPage}
            className="mt-3 btn btn-outline-secondary"
            style={{ width: "100%" }}
          >
            Diploma
          </button>
          <button
            onClick={nextPage}
            className="mt-3 btn btn-outline-secondary"
            style={{ width: "100%" }}
          >
            SMA Atau Setingkat
          </button>
          <button
            onClick={nextPage}
            className="mt-3 btn btn-outline-secondary"
            style={{ width: "100%" }}
          >
            SMP Atau Setingkat
          </button>
          <button
            onClick={nextPage}
            className="mt-3 btn btn-outline-secondary"
            style={{ width: "100%" }}
          >
            SD Atau Setingkat
          </button>
        </div>
      </div>
    </div>
  );
}

export default PendidikanTerakhir;
