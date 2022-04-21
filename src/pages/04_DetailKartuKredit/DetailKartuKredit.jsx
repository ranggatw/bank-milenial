import React from "react";
import { useNavigate } from "react-router-dom";
import Atm1 from "../../assets/atm1.png";

function DetailKartuKredit() {
  const navigate = useNavigate();
  const goToNextPage = () => {
    navigate("/kantor-cabang");
  };
  return (
    <div
      className=""
      style={{
        minHeight: "calc(100vh - 137.5px)",
        paddingTop: "3rem",
      }}
    >
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <img src={Atm1} />
      </ul>

      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 mt-4">
        <p>
          <strong>Blue Card </strong>
        </p>
      </ul>

      <div className="container mt-5">
        <table className="table table-striped">
          <thead className="table-bordered">
            <tr>
              <th
                style={{ backgroundColor: "#437CF8", width: "50%" }}
                className=" text-center"
                scope="col"
              >
                Biaya Limit transaksi
              </th>
              <th className="text-center" style={{ width: "50%" }} scope="col">
                Keuntungan
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Biaya</td>
              <td></td>
            </tr>
            <tr>
              <td>Setoran awal</td>
              <td>25.000</td>
            </tr>
            <tr>
              <td>Biaya Kartu</td>
              <td>4.500</td>
            </tr>
            <tr>
              <td>Biaya Adm Bulanan</td>
              <td>12.000</td>
            </tr>
            <tr>
              <td>Biaya Penutupan Rekening</td>
              <td>50.000</td>
            </tr>
            <tr>
              <td>Dana mengendap</td>
              <td>25.000</td>
            </tr>
            <tr>
              <td>Tarik tunai dengan kartu debit</td>
              <td>20.000.000</td>
            </tr>
            <tr>
              <td>Transfer antar bank melalui ATM</td>
              <td>15.000.000</td>
            </tr>
          </tbody>
        </table>
        <div className="text-center">
          <button onClick={goToNextPage} className="btn btn-primary mt-2">
            Pilih Rekening
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailKartuKredit;
