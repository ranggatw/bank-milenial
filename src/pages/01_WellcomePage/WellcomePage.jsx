import React from "react";
import "./welcomePage.css";
import Imagee from "../../assets/logo_bank.png";
import FooterWelcome from "../../components/FooterWellcome/FooterWelcome";
import { useNavigate } from "react-router-dom";

function WellcomePage() {
  const navigate = useNavigate();

  const goNextPage = () => {
    navigate("rekening-baru");
  };
  return (
    <div
      className=""
      style={{
        // height: "calc(100vh - 137.5px)",
        minHeight: "calc(100vh - 137.5px)",
        paddingTop: "5rem",
        backgroundColor: "#437CF8",
      }}
    >
      <div className="d-flex justify-content-evenly  ">
        <div className="top p-3 ">
          <h4 style={{ fontWeight: "700" }} className="text-center">
            Selamat Datang
          </h4>
          <hr
            style={{
              border: "1px solid #437CF8",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          />
          <div className="fw-bold p-4" style={{ fontSize: "24px" }}>
            di Layanan pembukaan rekening Bank Milenial
          </div>
          <br />
          <button
            onClick={goNextPage}
            style={{ width: "100%" }}
            className="btn btn-primary "
          >
            Buka Rekening
          </button>
        </div>

        <div className="">
          <div className="top">
            <div style={{ width: "100%" }} className="text-center">
              <img style={{ width: "260px" }} src={Imagee} />
            </div>
            <h4 className="fw-bold text-center">BANK MILENIAL</h4>
          </div>
        </div>
      </div>
      <div style={{ zIndex: "99" }}>
        <FooterWelcome />
      </div>
    </div>
  );
}

export default WellcomePage;
