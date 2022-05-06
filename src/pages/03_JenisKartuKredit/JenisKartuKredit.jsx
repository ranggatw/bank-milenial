import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  console.log(products);

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
        </div>
      </div>
    </div>
  );
}

export default JenisKartuKredit;
