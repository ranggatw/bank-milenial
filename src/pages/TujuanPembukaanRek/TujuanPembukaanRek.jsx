import React from "react";
import { useNavigate } from "react-router-dom";

function TujuanPembukaanRek() {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/pendidikan");
  };

  return (
    <div
      className="container"
      style={{
        // height: "calc(100vh - 137.5px)",
        minHeight: "calc(100vh - 137.5px)",
        paddingTop: "5rem",
      }}
    >
      {/* <div>TujuanPembukaanRek</div> */}
      <div className="text-center row">
        <h5 className="mt-5">
          <strong>Tujuan Pembukaan Rekening</strong>
        </h5>
        <p>
          Informasi ini membantu kami menyediakan produk lain yang tepat sesuai
          tujuan Anda
        </p>
        <div className="col-5 mx-auto">
          <button
            onClick={nextPage}
            className="mt-5 btn btn-outline-secondary"
            style={{ width: "100%" }}
          >
            Untuk Menabung
          </button>
          <button
            onClick={nextPage}
            className="mt-5 btn btn-outline-secondary"
            style={{ width: "100%" }}
          >
            Untuk Berinvestasi
          </button>
          <button
            onClick={nextPage}
            className="mt-5 btn btn-outline-secondary"
            style={{ width: "100%" }}
          >
            Untuk Mengajukan Pinjaman
          </button>
        </div>
      </div>
    </div>
  );
}

export default TujuanPembukaanRek;
