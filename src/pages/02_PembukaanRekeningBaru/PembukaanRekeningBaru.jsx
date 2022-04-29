import React from "react";
import Gambare from "../../assets/gambar1.png";
import Gambaree from "../../assets/gambar2.png";
import Gambareee from "../../assets/gambar3.png";
import Gambareeee from "../../assets/gambar4.png";
import { useNavigate } from "react-router-dom";

function PembukaanRekeningBaru() {
  const navigate = useNavigate();

  const goToNext = () => {
    navigate("/syarat-dan-ketentuan");
  };

  return (
    <div
      className=""
      style={{
        minHeight: "calc(100vh - 137.5px)",
        paddingTop: "5rem",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-5 p-4 border border-2 rounded-3 ">
            <div className="mb-4 ps-5">
              <h4 className="fw-bold ">Tahap Pembukaan Rekening Baru</h4>
              <div>
                Ikuti Tahap Pembukaan Rekening Baru dimanapun dan kapanpun
              </div>
            </div>
            <ul>
              <li className="d-flex mb-4">
                <div className="me-5">
                  <img src={Gambare} />
                </div>
                <div>
                  <div className="d-flex flex-column justify-content-start">
                    <div className="d-flex justify-content-start">
                      <strong className="text-primary">Pilih Kartu</strong>
                    </div>
                    <div> Pilih kartu debit yang anda inginkan </div>
                  </div>
                </div>
              </li>
              <li className="d-flex mb-4">
                <div className="me-5">
                  <img src={Gambaree} />
                </div>
                <div>
                  <div className="d-flex flex-column justify-content-start">
                    <div className="d-flex justify-content-start">
                      <strong className="text-primary">
                        Pilih kantor cabang
                      </strong>
                    </div>
                    <div> Pilih lokasi terdekat dari rumah anda </div>
                  </div>
                </div>
              </li>
              <li className="d-flex mb-4">
                <div className="me-5">
                  <img src={Gambareee} />
                </div>
                <div>
                  <div className="d-flex flex-column justify-content-start">
                    <div className="d-flex justify-content-start">
                      <strong className="text-primary">Verifikasi diri</strong>
                    </div>
                    <div> Siapkan dokumen e-KTP dan data diri </div>
                  </div>
                </div>
              </li>
              <li className="d-flex mb-4">
                <div className="me-5">
                  <img src={Gambareeee} />
                </div>
                <div>
                  <div className="d-flex flex-column justify-content-start">
                    <div className="d-flex justify-content-start">
                      <strong className="text-primary">Video verifikasi</strong>
                    </div>
                    <div>
                      Verifikasi diri Anda dengan mengupload video rekaman
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div>
              <button
                onClick={goToNext}
                style={{ width: "100%", padding: "0.8rem" }}
                className="btn btn-primary fw-bold "
              >
                Mulai
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PembukaanRekeningBaru;
