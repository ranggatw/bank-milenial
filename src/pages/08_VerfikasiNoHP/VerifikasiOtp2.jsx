import React, { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.css";

function VerifikasiOtp2() {
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
    navigate("/video-instruski");
  };

  const handleSubmitOtp = (e) => {
    e.preventDefault();
    alert(otp);
  };

  const [counter, setCounter] = useState(15);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const changeToMinute = () => {
    // let minutes = Math.floor((sec - hours * 3600) / 60);
  };

  const convertMS = (value) => {
    const sec = parseInt(value, 10); // convert value to number if it's string
    // let hours = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor(sec / 60); // get minutes
    let seconds = sec - minutes * 60; //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    // console.log(seconds);
    // return hours + ":" + minutes + ":" + seconds; // Return is HH : MM : SS
  };
  // console.log(convertMS);

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
                Verifikasi Nomor Handphone
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
              <div className="text-center pt-5">Belum menerima SMS ?</div>
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

export default VerifikasiOtp2;
