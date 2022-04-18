import React, { useState } from "react";
import ImgDummyKtp from "../../assets/dummyKtp.png";
import InputComp from "../../components/Input/InputComp";
import ButtonNext from "../../components/Button/ButtonNext";
import { useDispatch, useSelector } from "react-redux";
import { registerNasabah } from "../../redux/registerUserSlice";

function DataDiriPage() {
  // const nasabah = useSelector((store) => store.user);
  // console.log(nasabah);

  const dispatch = useDispatch();

  const [values, setValues] = useState({
    nik: "",
    nasabahName: "",
    placeBirth: "",
    dateBirth: "",
    numberPhone: "",
    email: "",
    nasabahMother: "",
    posNumber: "",
  });
  // console.log(values);

  const handleDataDiriNasabah = () => {
    setValues({
      nik: "",
      nasabahName: "",
      placeBirth: "",
      dateBirth: "",
      numberPhone: "",
      email: "",
      nasabahMother: "",
      posNumber: "",
    });
    dispatch(
      registerNasabah({
        // id: 3,
        nik: values.nik,
        nasabahName: values.nasabahName,
        placeBirth: values.placeBirth,
        dateBirth: values.dateBirth,
        numberPhone: values.numberPhone,
        email: values.email,
        nasabahMother: values.nasabahMother,
        posNumber: values.posNumber,
      })
    );
    console.log(values, "click button");
  };

  return (
    <div
      style={{
        // height: "calc(100vh - 137.5px)",
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
        <div className="row ">
          <div className="col mb-sm-2">
            <InputComp
              labelFor={"NIK"}
              labelTxt={"NIK"}
              inputProps={{
                type: "number",
                placeholder: "isi sesuai nomor induk pada E-KTP anda",
              }}
              value={values.nik}
              onChange={(e) => setValues({ ...values, nik: e.target.value })}
            />
            <InputComp
              labelFor={"name"}
              labelTxt={"Nama Lengkap"}
              inputProps={{
                type: "text",
                placeholder: "nama lengkap sesuai data pada E-KTP",
              }}
              value={values.nasabahName}
              onChange={(e) =>
                setValues({ ...values, nasabahName: e.target.value })
              }
            />
            <InputComp
              labelFor={"tempat-lahir"}
              labelTxt={"Tempat Lahir"}
              inputProps={{
                type: "text",
                placeholder: "isi sesuai dengan data E-KTP ",
              }}
              value={values.placeBirth}
              onChange={(e) =>
                setValues({ ...values, placeBirth: e.target.value })
              }
            />
            <InputComp
              labelFor={"tanggal-lahir"}
              labelTxt={"Tanggal Lahir"}
              inputProps={{
                type: "date",
                placeholder: "isi sesuai dengan data E-KTP ",
              }}
              value={values.dateBirth}
              onChange={(e) =>
                setValues({ ...values, dateBirth: e.target.value })
              }
            />
            {/* <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
          </div>
          <div className="col">
            <InputComp
              labelFor={"no-hp"}
              labelTxt={"Nomor Handphone"}
              inputProps={{
                type: "number",
                placeholder: "pastikan nomor aktif untuk menerima verifikasi",
              }}
              value={values.numberPhone}
              onChange={(e) =>
                setValues({ ...values, numberPhone: e.target.value })
              }
            />
            <InputComp
              labelFor={"email"}
              labelTxt={"Email"}
              inputProps={{
                type: "email",
                placeholder: "jordangord***@gmail.com",
              }}
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <InputComp
              labelFor={"nama-ibu"}
              labelTxt={"Nama Ibu Kandung"}
              inputProps={{
                type: "text",
                placeholder: "isi sesuai data kartu keluarga",
              }}
              value={values.nasabahMother}
              onChange={(e) =>
                setValues({ ...values, nasabahMother: e.target.value })
              }
            />
            <InputComp
              labelFor={"kode-pos"}
              labelTxt={"Kode Pos"}
              inputProps={{
                type: "number",
                placeholder: "55**1",
              }}
              value={values.posNumber}
              onChange={(e) =>
                setValues({ ...values, posNumber: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        <ButtonNext onClick={handleDataDiriNasabah} title={"Lanjut"} />
      </div>
    </div>
  );
}

export default DataDiriPage;
