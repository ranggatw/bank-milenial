import React from "react";
import Framee from "../../assets/ojk.png";

function FooterWelcome() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", marginTop: "14rem" }}>
      <div className="d-flex justify-content-center container p-4">
        <div className="col 4">
          <h4 className="fw-bold">Kantor Pusat</h4>
          <p>
            Gedung Milenial <br /> Jl. Menuju Masa <br /> Depan No.23, <br />{" "}
            Jakarta, 55259, <br /> Indonesia{" "}
          </p>
        </div>

        <div className="col-4 mt-3">
          <h4 className="fw-bold">Hubugi Kami</h4>
          <p>
            Kontak <br /> <span className="fw-bold"> 133450</span> <br /> email{" "}
            <br /> <span className="fw-bold"> callmilenial@milenial.co.id</span>{" "}
          </p>
        </div>

        <div className="col-4 mt-3">
          <h4 className="fw-bold">Terdaftar dan Diawasi Oleh :</h4>
          <img src={Framee} />
        </div>
      </div>
    </div>
  );
}

export default FooterWelcome;
