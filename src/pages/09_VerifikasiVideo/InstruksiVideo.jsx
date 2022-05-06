import React, { useState } from "react";
import IlustrasiVideoImg from "../../assets/ilustrasi_instruksi_video.png";
import ButtonNext from "../../components/Button/ButtonNext";
import ButtonComp from "../../components/Button/ButtonComp";
import { useNavigate } from "react-router-dom";

function InstruksiVideo() {
  const navigate = useNavigate();
  const [statSyarat, setStatSyarat] = useState(false);
  const [syaratClick, setSyaratClick] = useState(false);

  const changeSyarat = () => {
    setStatSyarat(!statSyarat);
  };

  const backToInstruksi = () => {
    setStatSyarat(!statSyarat);
    setSyaratClick(true);
  };

  const gotoUpload = () => {
    navigate("/video-upload");
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
      <div>
        <div className="text-center mb-4">
          <h3 className="fw-bold mb-4">Upload Video Verifikasi</h3>
          <div className="text-center">
            <img src={IlustrasiVideoImg} alt="" />
          </div>
        </div>
        <div className="d-flex justify-content-center mb-5">
          <div className="p-2" style={{ width: "500px" }}>
            <div className="">
              <p className="fw-bold">Perhatikan hal-hal berikut : </p>
              <ol>
                {/* {syaratClick == false ? ""  */}
                <li>
                  Nasabah merekam video dengan mengucapkan kalimat instruksi
                  “Saya (nama nasabah) menyetujui{" "}
                  <span
                  className="fw-bold"
                  // onClick={changeSyarat}
                  >
                    syarat dan ketentuan{" "}
                  </span>
                   yang diberikan”
                </li>
                <li>
                  Upload video rekaman dalam format mp4 dengan ukuran maksimal
                  10 MB
                </li>
                <li>
                  Usahakan video yang terekam jelas dan audio dapat terdengar
                  baik
                </li>
              </ol>
            </div>
            <div className="text-center">
              <ButtonComp
                className={"btn btn-primary btn-md"}
                disabled={false}
                title={"Upload Video"}
                onClick={gotoUpload}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstruksiVideo;
