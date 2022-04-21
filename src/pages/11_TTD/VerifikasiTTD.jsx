// import React from 'react'

// function VerifikasiTTD() {
//   return (
//     <div>VerifikasiTTD</div>
//   )
// }

// export default VerifikasiTTD
import React, { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.css";

function VerifikasiTTD() {
  const data = useSelector((store) => store.nasabah);
  const navigate = useNavigate();
  // console.log(data.dataNasabah.numberPhone);

  const [otp, setOtp] = useState("");
  const [numPhone, setNumPhone] = useState(
    data.dataNasabah.numberPhone || "0812xxxxxx"
  );
  const [expOtp, setExpOtp] = useState("09:55");
  const [numInputs, setNumInputs] = useState(6);
  const [isDisabled, setIsDisabled] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);
  const [separator, setSeparator] = useState("-");
  const [isInputNum, setIsInputNum] = useState(false);
  const [placeholder, setPlaceholder] = useState("");

  const handleOtpChange = (otp) => {
    setOtp(otp);
  };

  const clearOtp = () => {
    setOtp({ otp: "" });
  };

  const goToNext = () => {
    navigate("/konfirmasi-akhir");
  };

  const handleSubmitOtp = (e) => {
    e.preventDefault();
    alert(otp);
  };

  const [counter, setCounter] = useState(59);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const changeToMinute = () => {
    // let minutes = Math.floor((sec - hours * 3600) / 60);
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
      <div className="view">
        <div className="card-form">
          <form onSubmit={() => handleSubmitOtp()}>
            <div>
              <h2 className="verifikasi-head-title pb-4 text-center">
                Verifikasi Tanda Tangan Digital
              </h2>
            </div>
            <div className="text-center">
              <div>Masukkan 6 digit kode OTP yang telah di kirim ke nomor</div>
              <div className=" pt-1">
                <span className="fw-bold"> {numPhone} </span> dalam :{" "}
                <span className="fw-bold">00:{counter}</span>
              </div>
            </div>
            <div className="margin-top--small p-2">
              <OtpInput
                inputStyle="inputStyle"
                numInputs={numInputs}
                isDisabled={isDisabled}
                hasErrored={hasErrored}
                errorStyle="error"
                onChange={handleOtpChange}
                separator={<span>{separator}</span>}
                isInputNum={isInputNum}
                shouldAutoFocus
                value={otp}
                placeholder={placeholder}
              />
            </div>
            <div className=" p-2 text-center">
              <div>
                <div className="">
                  Kode ini dikirimkan sebagai proses validasi Tanda Tangan
                  Digital atas <br />
                  pengajuan pembukaan rekening
                </div>
                <div className="text-center pt-5">Belum menerima SMS ?</div>
              </div>
              {counter == 0 ? (
                <div className="resend">
                  <a href="#">Kirim ulang</a>
                </div>
              ) : (
                ""
              )}
              <div className="btn-row pt-3 justify-content-center">
                <button
                  onClick={goToNext}
                  className={otp.length < numInputs ? "btn" : "btn btn-primary"}
                  disabled={otp.length < numInputs}
                >
                  Lanjut
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VerifikasiTTD;
