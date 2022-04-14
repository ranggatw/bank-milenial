import React, { useState } from "react";
import OtpInput from "react-otp-input";
import "./index.css";

function VerifikasiOtp() {
  const [otp, setOtp] = useState("");
  const [numPhone, setNumPhone] = useState("08812758185");
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

  const handleSubmitOtp = (e) => {
    e.preventDefault();
    alert(otp);
  };

  return (
    <div
      className="wraper-verifikasi-otp"
      style={{
        height: `calc(100vh - 137.5px);`,
        minHeight: "calc(100vh - 137.5px)",
        paddingTop: "8rem",
      }}
    >
      <div className="view">
        <div className="card-form">
          <form onSubmit={() => handleSubmitOtp()}>
            <div>
              <h2 className="verifikasi-head-title pb-4 text-center">
                Verifikasi Nomor Handphone
              </h2>
            </div>
            <div className="text-center">
              <div>Masukkan 6 digit kode OTP yang telah di kirim ke nomor</div>
              <div className=" pt-1">
                <span className="fw-bold"> {numPhone} </span> dalam :{" "}
                <span className="fw-bold">{expOtp}</span>
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
              <div className="text-center pt-5">Belum menerima SMS ?</div>
              <div className="resend">
                <a href="#">Kirim ulang</a>
              </div>
              <div className="btn-row pt-3 justify-content-center">
                <button
                  // className="btn "
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

export default VerifikasiOtp;
