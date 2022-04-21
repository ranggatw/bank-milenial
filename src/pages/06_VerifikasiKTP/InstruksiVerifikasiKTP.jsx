import React from "react";
import { useNavigate } from "react-router-dom";
import ImgKtpBenar from "../../assets/ktp_benar.png";
import ImgKtpSalah from "../../assets/ktp_salah.png";
import ButtonNext from "../../components/Button/ButtonNext";

function InstruksiVerifikasiKTP() {
  let navigate = useNavigate();

  const handleButtonMengerti = () => {
    navigate("/ktp/upload");
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
      <div className="d-flex justify-content-center mb-5">
        <div className="p-2" style={{ width: "500px" }}>
          <div className="text-center mb-4">
            <h3>Verifikasi E-KTP</h3>
          </div>
          <div className="">
            <p className="fw-bold">Perhatikan hal-hal berikut : </p>
            <ol>
              <li>
                Foto e-KTP harus difoto secara langsung, bukan fotokopi e-KTP
                atau lainnya.
              </li>
              <li>
                Pastikan foto e-KTP masuk kedalam frame dan tidak terpotong
              </li>
              <li>
                Usahakan foto dan data pada e-KTP terbaca jelas (tidak
                terpotong, tertutup jari, atau terkena pantulan cahaya)
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="d-flex flex-sm-row flex-column text-sm-center justify-content-evenly">
        <div className="text-center mb-4 mb-lg-0">
          <img src={ImgKtpBenar} alt="" />
          <div className="text-center pt-2">
            <span className="text-primary fw-bold">Benar</span>
          </div>
        </div>
        <div className="text-center">
          <img src={ImgKtpSalah} alt="" />
          <div className="text-center pt-2">
            <span className="text-danger fw-bold">Salah</span>
          </div>
        </div>
      </div>
      <div className="text-center">
        <ButtonNext onClick={handleButtonMengerti} title={"Oke mengerti"} />
      </div>
    </div>
  );
}

export default InstruksiVerifikasiKTP;
