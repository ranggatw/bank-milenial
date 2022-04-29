import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Atm1 from "../../assets/atm2.png";

function Konfirmasi() {
  const [tmpImgCard, setTmpImgCard] = useState(localStorage.getItem("image"));
  const navigate = useNavigate();
  const finishPage = () => {
    navigate("/finish");
  };
  return (
    <div
      className="wraper-verifikasi-otp"
      style={{
        // height: `calc(100vh - 137.5px);`,
        minHeight: "calc(100vh - 137.5px)",
        paddingTop: "8rem",
      }}
    >
      <div className="text-center">
        <div className="text-center">
          <h4>Konfirmasi Data</h4>
          <p>Cek kembali data di bawah ini</p>
        </div>
        <div className="d-flex justify-content-center ">
          <div
            style={{ width: "30vw" }}
            className="border border-dark rounded-3 p-5 text-center"
          >
            <div>
              <img src={Atm1} />
            </div>
            <div className="mt-4 d-flex justify-content-evenly ">
              <div className="text-left me-5 mb-3">
                <div className="d-flex mb-2 justify-content-start">Nama</div>
                <div className="d-flex mb-2 justify-content-start">Nik</div>
                <div className="d-flex mb-2 justify-content-start">
                  Kantor Cabang
                </div>
              </div>
              <div>
                <div className="fw-bold d-flex mb-2 justify-content-start">
                  jordan abigail
                </div>
                <div className="fw-bold mb-2 d-flex justify-content-start">
                  254364576486468685658
                </div>
                <div className="fw-bold mb-2 d-flex justify-content-start">
                  Mj2
                </div>
              </div>
            </div>
            {/* <div className="mt-4 d-flex">
              <div className="d-flex mx-5 justify-content-start">Nama</div>
              <div className=" d-flex justify-content-start">
                jordan abigail
              </div>
            </div> */}
            {/* <div className="mt-3 d-flex">
              <div className="mx-5">Nik</div>
              <div className=" ">254364576486468685658</div>
            </div>
            <div className="mt-3 d-flex justify-content-between">
              <div className="d-flex justify-content-start">Kantor Cabang</div>
              <div className=" d-flex justify-content-start">Mj2</div>
            </div>{" "} */}
          </div>
        </div>
        <br />
        <button onClick={finishPage} className="btn btn-primary mt-5">
          Konfirmasi
        </button>
      </div>
    </div>
  );
}

export default Konfirmasi;
