import React from "react";
import videoInst from "../../assets/videoInst.png";
import { useNavigate } from "react-router-dom";
import ButtonNext from "../../components/Button/ButtonNext";

function UploadFotoBersamaInst() {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/foto-ktp");
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
      <div className="d-flex justify-content-center mb-5">
        <div className="p-2" style={{ width: "500px" }}>
          <div className="text-center mb-4">
            <h3>Upload Foto Selfie dan e-KTP</h3>
          </div>
          <div className="">
            <p className="fw-bold">Perhatikan hal-hal berikut : </p>
            <img className="mb-3" src={videoInst} />
            <ol>
              <li>Pastikan e-KTP yang Anda pegang tidak menutupi wajah</li>
              <li>
                Pastikan e-KTP yang digunakan sama dengan yang Anda gunakan
                sebelumnya
              </li>
              <li>
                Pastikan foto selfie dengan e-KTP terlihat secara menyeluruh dan
                jelas
              </li>
              <li>
                Upload foto selfie dengan e-KTP dalam format jpeg/jpg dengan
                ukuran maksimal 1 MB
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="text-center">
        <ButtonNext onClick={nextPage} title={"Upload Foto"} />
      </div>
    </div>
  );
}

export default UploadFotoBersamaInst;
