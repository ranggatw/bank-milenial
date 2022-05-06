import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Atm1 from "../../assets/atm1.png";

function DetailKartuDebit() {
  const { state } = useLocation();
  console.log(state, "State");
  // console.log(
  //   state.biayaDanLimit.map((data, i) => data).map((title) => title.jenis),
  //   "looooooping"
  // );
  localStorage.setItem("imgKartu", state.imgKartu);
  console.log(state.imgKartu, "img kartu");
  // console.log(
  //   state.fitur.map((data, i) => data).map((title) => title),
  //   "looooooping ssssssssssss"
  // );
  const renderBiaya = () =>
    state.biayaDanLimit
      .map((data, i) => data)
      .map((title, i) =>
        !(i % 2) ? (
          <li
            key={i}
            className="list-group-item list-group-item-secondary d-flex  fw-bold"
          >
            <div className="flex-fill">{title.jenis}</div>
            <div>{title.biaya}</div>
            <div></div>
          </li>
        ) : (
          <li key={i} className="list-group-item d-flex  fw-bold">
            <div className="flex-fill">{title.jenis}</div>
            <div>{title.biaya}</div>
          </li>
        )
      );
  const renderFitur = () =>
    state.fitur
      .map((data, i) => data)
      .map((title, i) =>
        !(i % 2) ? (
          <li
            key={i}
            className="list-group-item list-group-item-secondary d-flex  fw-bold"
          >
            <div className="flex-fill">{title.title}</div>
            <div>{title.jenis}</div>
            <div></div>
          </li>
        ) : (
          <li key={i} className="list-group-item d-flex  fw-bold">
            <div className="flex-fill">{title.title}</div>
            <div>{title.jenis}</div>
          </li>
        )
      );

  // const { id } = useParams();
  const navigate = useNavigate();
  const goToNextPage = () => {
    navigate("/ktp/instruksi");
  };

  // console.log(state, "easdasdasdjasdsakdj");
  return (
    <div
      className=""
      style={{
        minHeight: "calc(100vh - 137.5px)",
        paddingTop: "3rem",
      }}
    >
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        {state == undefined ? (
          <img src={Atm1} />
        ) : (
          <img src={"http://localhost:3000" + state.imgKartu} />
        )}
      </ul>

      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 mt-2">
        <p>
          <strong>{state.title} </strong>
        </p>
      </ul>

      <div className="container mt-2">
        <div className="mb-4">
          <h5 className="text-primary">Biaya dan Transaksi</h5>
          <div>
            <ul className="list-group">{renderBiaya()}</ul>
          </div>
        </div>
        <div>
          <h5 className="text-primary">Fitur</h5>
          <div>
            <ul className="list-group">{renderFitur()}</ul>
          </div>
        </div>

        <div className="text-center mt-3 mb-5">
          <button onClick={goToNextPage} className="btn btn-primary mt-2">
            Pilih Rekening
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailKartuDebit;
