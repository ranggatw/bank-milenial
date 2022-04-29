import React, { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PinPassword() {
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
    navigate("/kantor-cabang");
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
        <div className="card-form ">
          <form onSubmit={() => handleSubmitOtp()}>
            <div>
              <h2 className="fw-bold text-center">Buat Pin</h2>
            </div>
            <div className="text-center">
              <div>
                Hindari PIN yang mudah ditebak, seperti 6 angka berulang,
                berurutan, atau tangga lahir Anda
              </div>
            </div>
            <div className="d-flex justify-content-center p-2">
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
              <div className="btn-row pt-3 justify-content-center">
                <button onClick={goToNext} className="btn btn-primary">
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

export default PinPassword;
