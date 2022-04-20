import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonNext from "../../components/Button/ButtonNext";

function SyaratDanKetentuan() {
  const navigate = useNavigate();

  const backToInstruksi = () => {
    navigate(-1, { state: { status: true } });
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
      <div className=" ">
        <h3 className="text-center fw-bold">Syarat dan Ketentuan</h3>
        <div className="d-flex justify-content-center mt-5">
          <div className="p-2" style={{ width: "500px" }}>
            <div className="text-left">
              <ol>
                <li>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used
                </li>
                <li>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
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
    </div>
  );
}

export default SyaratDanKetentuan;
