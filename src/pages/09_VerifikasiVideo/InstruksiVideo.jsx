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
    navigate("/dev");
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
      {statSyarat == false ? (
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
                      onClick={changeSyarat}
                      style={{ color: "blue", cursor: "pointer" }}
                    >
                      {" "}
                      {/* syarat dan ketentuan */}
                      {/* <Link to={"/register/video-syarat-ketentuan"}> */}
                      syarat dan ketentuan
                      {/* </Link> */}
                      {/* <a href="/register/video-syarat-ketentuan">
                    syarat dan ketentuan
                  </a>{" "} */}
                    </span>{" "}
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
                  disabled={!syaratClick}
                  title={"Upload Video"}
                  onClick={gotoUpload}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className=" ">
            <h3 className="text-center fw-bold">Syarat dan Ketentuan</h3>
            <div className="d-flex justify-content-center mt-5">
              <div className="p-2" style={{ width: "500px" }}>
                <div className="text-left">
                  <ol>
                    <li>
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used
                    </li>
                    <li>
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content. Lorem ipsum may be used as a
                      placeholder before final copy is available.
                    </li>
                    <li>In publishing and graphic design</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <ButtonNext title={"Ok"} onClick={backToInstruksi} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default InstruksiVideo;
