import React, { useState } from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import "./kantorCabang.css";
import ButtonComp from "../../components/Button/ButtonComp";

function KantorCabang() {
  const [selectedCabang, setSelectedCabang] = useState(false);
  const selectCabang = () => {
    setSelectedCabang(true);
  };

  const nextButton = () => {
    console.log("next");
  };
  console.log("wkwkwkw", selectedCabang);
  return (
    <div
      className=""
      style={{
        // height: "calc(100vh - 137.5px)",
        minHeight: "calc(100vh - 137.5px)",
        paddingTop: "5rem",
      }}
    >
      <div className="text-center mb-4">
        <h3 className="fw-bold">Pilih Kantor Cabang</h3>
        <p>
          Pilih kantor cabang yang Anda inginkan untuk pengelolaan rekening Anda
        </p>
      </div>
      <div className="d-flex p-3">
        <select
          className="form-select mx-1"
          aria-label="Default select example"
        >
          <option selected>Pilih Provinsi</option>
          <option value="1">Yogyakarta</option>
          {/* <option value="2">Jawa Tengah</option>
          <option value="3">Jawa Timur</option> */}
        </select>
        <select
          className="form-select mx-1"
          aria-label="Default select example"
        >
          <option selected>Pilih Kota</option>
          <option value="1">Yogyakarta</option>
          {/* <option value="2">Two</option>
          <option value="3">Three</option> */}
        </select>
        <select
          className="form-select mx-1"
          aria-label="Default select example"
        >
          <option selected>Pilih Kecamatan</option>
          <option value="1">Umbulharjo</option>
          <option value="2">Banguntapan</option>
        </select>
        <select
          className="form-select mx-1"
          aria-label="Default select example"
          onChange={selectCabang}
        >
          <option selected>Pilih Kantor Cabang</option>
          <option value="1">Kanotr Pusat Nitikan</option>
          {/* <option value="2">Two</option> */}
          <option value="3">Kantor Cabang Banguntapan </option>
        </select>
      </div>
      <div className="d-flex justify-content-center px-4">
        <MapContainer
          center={[-7.79558, 110.369492]}
          zoom={12}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
        </MapContainer>
      </div>
      <div className="text-center my-4">
        <ButtonComp
          title={"Lanjut"}
          onClick={nextButton}
          className={"btn btn-primary btn-md"}
          disabled={!selectedCabang}
        />
      </div>
    </div>
  );
}

export default KantorCabang;
