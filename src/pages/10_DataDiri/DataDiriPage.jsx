import React, { useEffect, useState } from "react";
import ImgDummyKtp from "../../assets/dummyKtp.png";
import InputComp from "../../components/Input/InputComp";
import ButtonNext from "../../components/Button/ButtonNext";
import { useDispatch, useSelector } from "react-redux";
import ButtonComp from "../../components/Button/ButtonComp";
import { registerNasabah } from "../../redux/registerUserSlice";
import { useNavigate, useLocation } from "react-router-dom";

function DataDiriPage() {
  const { state } = useLocation();
  const nasabah = useSelector((store) => store.nasabah.dataNasabah);
  console.log(nasabah, "sanasdasd");
  console.log(state, "sanasdasd");

  const [tempImage, setTempImg] = useState(localStorage.getItem("imageKtp"));
  // const renderImg = URL.createObjectURL(renderImg);

  console.log(tempImage, "local");
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const [activeBtn, setActiveButton] = useState(false);
  // console.log(activeBtn, "aktif");

  useEffect(() => {
    if (
      values.nik &&
      values.nasabahName &&
      values.placeBirth &&
      values.dateBirth &&
      values.numberPhone &&
      values.email &&
      values.nasabahMother &&
      values.posNumber !== values.nik.length > 0 &&
      values.nasabahName.length > 0 &&
      values.placeBirth.length > 0 &&
      values.dateBirth.length > 0 &&
      values.numberPhone.length > 0 &&
      values.email.length > 0 &&
      values.nasabahMother.length > 0 &&
      values.posNumber.length > 0
    ) {
      setActiveButton(true);
      // console.log("kosong");
    } else {
      // console.log("")
    }
  });

  useEffect(() => {
    // convertMS("600");
  });

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
    navigate("/tujuan-pembukaan-rekening");

    // console.log(values, "click button");
  };

  const noAct = () => {
    console.log("eaaa");
  };

  const validEmail = new RegExp("^\\d{16}$");

  const validate = () => {
    if (!validEmail.test(values.nik)) {
      // console.log("sdasdlas");
      // setEmailErr(true);
    }
    // if (!validPassword.test(password)) {
    //   setPwdError(true);
    // }
  };

  useEffect(() => {
    validate();
    // setTempImg(localStorage.getItem("imageKtp"));
  }, [tempImage]);

  const handleNIK = (e) => {
    const limit = 16;
    setValues({ ...values, nik: e.target.value.slice(0, limit) });
  };

  const handleNamaIbu = (e) => {
    // const re = /^[A-Za-z]+$/;
    // if (e.target.value === "" || re.test(e.target.value))
    setValues({ ...values, nasabahMother: e.target.value });
  };

  const handleTempatLahir = (e) => {
    const re = /^[A-Za-z]+$/;
    if (e.target.value === "" || re.test(e.target.value))
      setValues({ ...values, placeBirth: e.target.value });
  };
  const handleNamaLengkap = (e) => {
    // const re = /^[A-Za-z]+$/;
    // if (e.target.value === "" || re.test(e.target.value))
    setValues({ ...values, nasabahName: e.target.value });
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
            <img
              src={tempImage || state}
              alt=""
              style={{ maxWidth: "300px", maxHeight: "300px" }}
            />
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
                maxLength: 6,
              }}
              value={values.nik}
              onChange={(e) => handleNIK(e)}

              // onChange={(e) => setValues({ ...values, nik: e.target.value })}
            />
            <InputComp
              labelFor={"name"}
              labelTxt={"Nama Lengkap"}
              inputProps={{
                type: "text",
                placeholder: "nama lengkap sesuai data pada E-KTP",
              }}
              value={values.nasabahName}
              onChange={(e) => handleNamaLengkap(e)}
              // onChange={(e) =>
              //   setValues({ ...values, nasabahName: e.target.value })
              // }
            />
            <InputComp
              labelFor={"tempat-lahir"}
              labelTxt={"Tempat Lahir"}
              inputProps={{
                type: "text",
                placeholder: "isi sesuai dengan data E-KTP ",
              }}
              value={values.placeBirth}
              onChange={(e) => handleTempatLahir(e)}
              // onChange={(e) =>
              //   setValues({ ...values, placeBirth: e.target.value })
              // }
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
                placeholder:
                  "pastikan nomor aktif untuk menerima kode verifikasi",
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
                // onKeyPress: ,
              }}
              value={values.nasabahMother}
              onChange={(e) => handleNamaIbu(e)}
              // onChange={(e) =>
              //   setValues({ ...values, nasabahMother: e.target.value })
              // }
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
      <div className="text-center mb-4">
        {activeBtn == true ? (
          <ButtonNext onClick={handleDataDiriNasabah} title={"Lanjut"} />
        ) : (
          <ButtonComp
            title={"Lanjut"}
            onClick={noAct}
            className={"btn btn-primary btn-md"}
            disabled={true}
          />
          // <ButtonNext onClick={handleDataDiriNasabah} title={"Lanjut"} />
        )}
      </div>
    </div>
  );
}

export default DataDiriPage;
