import React from "react";
import ImgDummyKtp from "../../assets/dummyKtp.png";
import InputComp from "../../components/Input/InputComp";
import DatePickerComp from "../../components/Input/DatePickerComp";
import ButtonNext from "../../components/Button/ButtonNext";

function DataDiriPage() {
  return (
    <div
      style={{
        height: "calc(100vh - 137.5px)",
        minHeight: "calc(100vh - 137.5px)",
        paddingTop: "4rem",
      }}
    >
      <div className="text-center">
        <h3 className="fw-bold">Data Diri</h3>
        <div className="pt-4">
          <div>
            <span>
              Lengkapi seluruh data dengan benar untuk mempermudah pembukaan
              rekening
            </span>
          </div>
          <div className="pt-4">
            <img src={ImgDummyKtp} alt="" />
          </div>
        </div>
      </div>
      <div
        style={{
          paddingLeft: "5rem",
          paddingRight: "5rem",
          paddingTop: "2rem",
        }}
      >
        <form className="row">
          <div className="form-group col">
            <InputComp
              labelFor={"NIK"}
              labelTxt={"NIK"}
              placeholder={"isi sesuai nomor induk pada E-KTP anda"}
              inputType={"number"}
            />
            <InputComp
              labelFor={"name"}
              labelTxt={"Nama Lengkap"}
              placeholder={"nama lengkap sesuai data pada E-KTP"}
              inputType={"text"}
            />
            <InputComp
              labelFor={"tempat-lahir"}
              labelTxt={"Tempat Lahir"}
              placeholder={"isi sesuai dengan data E-KTP "}
              inputType={"text"}
            />
            <DatePickerComp />
            {/* <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
          </div>
          <div className="form-group col">
            <InputComp
              labelFor={"no-hp"}
              labelTxt={"Nomor Handphone"}
              placeholder={"pastikan nomor aktif untuk menerima verifikasi"}
              inputType={"number"}
            />
            <InputComp
              labelFor={"email"}
              labelTxt={"Email"}
              placeholder={"jordangord***@gmail.com"}
              inputType={"email"}
            />
            <InputComp
              labelFor={"nama-ibu"}
              labelTxt={"Nama Ibu Kandung"}
              placeholder={"isi sesuai data kartu keluarga"}
              inputType={"text"}
            />
            <InputComp
              labelFor={"kode-pos"}
              labelTxt={"Kode Pos"}
              placeholder={"55**1"}
              inputType={"text"}
            />
          </div>
        </form>
      </div>
      <div className="text-center">
        <ButtonNext title={"Lanjut"} />
      </div>
    </div>
  );
}

export default DataDiriPage;
