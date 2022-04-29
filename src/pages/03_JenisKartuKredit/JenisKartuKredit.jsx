import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Atm from "../../assets/atm1.png";
import Atm2 from "../../assets/atm1.png";
import Atm3 from "../../assets/atm1.png";
import "./jeniskartukredit.css";
import { kartuDebit } from "./dummyKartuDebitDetail";
import CardKartuDebit from "./CardKartuDebit";

function JenisKartuKredit() {
  const navigate = useNavigate();

  const goToNext = () => {
    navigate("/detail-kartu");
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    setProducts(kartuDebit);
  };

  // console.log(products);

  return (
    <div
      className=""
      style={{
        minHeight: "calc(100vh - 137.5px)",
        paddingTop: "5rem",
      }}
    >
      <div className="text-center ">
        <h4 className="mb-4 fw-bold">Jenis Kartu Debit</h4>
        <p className="fw-bold">Pilih kartu debit sesuai kebutuhan anda</p>
      </div>
      <div className="container">
        <div className="row justify-content-center mt-2 gx-2">
          {products.map((data, key) => (
            <CardKartuDebit key={key} data={data} />
          ))}
          {/* <div onClick={goToNext} className="col-6 style-card ">
            <ul className="Bas">
              <li className="d-flex">
                <img src={Atm} />
                <div className="ms-5">
                  <div className="d-flex flex-column justify-content-start">
                    <div className="d-flex justify-content-start">
                      Lorem ipsum, or lipsum as it is
                    </div>
                    <div className="d-flex justify-content-start">
                      sometimes known, is dummy
                    </div>
                    <div className="d-flex justify-content-start">
                      text used in laying out print,
                    </div>
                    <div className="d-flex justify-content-start">
                      graphic or web designs. The
                    </div>
                    <div className="d-flex justify-content-start">
                      passage is attributed to an
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div onClick={goToNext} className="col-6 style-card ">
            <ul className="Bas">
              <li className="d-flex">
                <img src={Atm2} />
                <div className="ms-5">
                  <div className="d-flex flex-column justify-content-start">
                    <div className="d-flex justify-content-start">
                      Lorem ipsum, or lipsum as it is
                    </div>
                    <div className="d-flex justify-content-start">
                      sometimes known, is dummy
                    </div>
                    <div className="d-flex justify-content-start">
                      text used in laying out print,
                    </div>
                    <div className="d-flex justify-content-start">
                      graphic or web designs. The
                    </div>
                    <div className="d-flex justify-content-start">
                      passage is attributed to an
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div onClick={goToNext} className="col-6 mt-5 style-card">
            <ul className="Bas">
              <li className="d-flex">
                <img src={Atm2} />
                <div className="ms-5">
                  <div className="d-flex flex-column justify-content-start">
                    <div className="d-flex justify-content-start">
                      Lorem ipsum, or lipsum as it is
                    </div>
                    <div className="d-flex justify-content-start">
                      sometimes known, is dummy
                    </div>
                    <div className="d-flex justify-content-start">
                      text used in laying out print,
                    </div>
                    <div className="d-flex justify-content-start">
                      graphic or web designs. The
                    </div>
                    <div className="d-flex justify-content-start">
                      passage is attributed to an
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div onClick={goToNext} className="col-6 mt-5 style-card">
            <ul className="Bas">
              <li className="d-flex">
                <img src={Atm3} />
                <div className="ms-5">
                  <div className="d-flex flex-column justify-content-start">
                    <div className="d-flex justify-content-start">
                      Lorem ipsum, or lipsum as it is
                    </div>
                    <div className="d-flex justify-content-start">
                      sometimes known, is dummy
                    </div>
                    <div className="d-flex justify-content-start">
                      text used in laying out print,
                    </div>
                    <div className="d-flex justify-content-start">
                      graphic or web designs. The
                    </div>
                    <div className="d-flex justify-content-start">
                      passage is attributed to an
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
           */}
        </div>
      </div>
    </div>
  );
}

export default JenisKartuKredit;
