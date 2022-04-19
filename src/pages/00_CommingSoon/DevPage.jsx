import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonNext from "../../components/Button/ButtonNext";

function DevPage() {
  let navigate = useNavigate();

  const insttruksiKtp = () => {
    navigate("/register/ktp/instruksi");
  };
  const uploadKTP = () => {
    navigate("/register/ktp/upload");
  };
  const dataDiriPage = () => {
    navigate("/register/ktp/data-diri");
  };
  const otp = () => {
    navigate("/register/otp");
  };
  const ttdPage = () => {
    navigate("/register/ttd");
  };

  return (
    <div>
      <h1>DevPage</h1>
      <div className="mb-2">
        <ButtonNext title={"UploadKTP PAGE"} onClick={uploadKTP} />
      </div>
      <div className="mb-2">
        <ButtonNext title={"Instruksi KTP PAGE"} onClick={insttruksiKtp} />
      </div>
      <div className="mb-2">
        <ButtonNext title={"DataDiri Page"} onClick={dataDiriPage} />
      </div>
      <div className="mb-2">
        <ButtonNext title={"OTP PAGE"} onClick={otp} />
      </div>
      <div className="mb-2">
        <ButtonNext title={"TTD PAGE"} onClick={ttdPage} />
      </div>
    </div>
  );
}

export default DevPage;
