import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComp from "../../components/Button/ButtonComp";
import ButtonNext from "../../components/Button/ButtonNext";
import CheckComp from "../../components/Check/CheckComp";

import InputComp from "../../components/Input/InputComp";
import InputCompCustom from "../../components/Input/InputCompCustom";

function InformasiPekerjaan() {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/otp-2");
  };

  const noAct = () => {
    console.log("eaa");
  };
  const [values, setValues] = useState({
    pekerjaan: "",
    perusahaan: "",
    bidang: "",
    telpPerushaan: "",
    pendapatan: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (e) => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className="container"
      style={{
        // height: "calc(100vh - 137.5px)",
        minHeight: "calc(100vh - 137.5px)",
        paddingTop: "5rem",
      }}
    >
      <div className="row">
        <div className="text-center">
          <h5 className="mt-5">
            <strong>Informasi Pekerjaan</strong>
          </h5>
          <p>Lengkapi data berikut mengenai pekerjaan Anda saat ini</p>
        </div>
        <div className="col-5 mx-auto">
          <InputComp
            labelFor={"Pekerjaan"}
            labelTxt={"Jenis Pekerjaan"}
            inputProps={{
              type: "text",
              placeholder: "",
              // maxLength: 6,
            }}
            value={values.pekerjaan}
            // onChange={noAct}

            onChange={(e) =>
              setValues({ ...values, pekerjaan: e.target.value })
            }
          />
          <InputComp
            labelFor={"Perusahaan"}
            labelTxt={"Nama Perusahaan"}
            inputProps={{
              type: "text",
              placeholder: "",
              // maxLength: 6,
            }}
            value={values.perusahaan}
            // onChange={noAct}

            onChange={(e) =>
              setValues({ ...values, perusahaan: e.target.value })
            }
          />
          <InputComp
            labelFor={"Bidang"}
            labelTxt={"Bidang Usaha"}
            inputProps={{
              type: "text",
              placeholder: "",
            }}
            value={values.bidang}
            // onChange={noAct}

            onChange={(e) => setValues({ ...values, bidang: e.target.value })}
          />
          <InputComp
            labelFor={"Telepon Perusahaan"}
            labelTxt={"Telepon Perusahaan"}
            inputProps={{
              type: "text",
              placeholder: "",
              // maxLength: 6,
            }}
            value={values.telpPerushaan}
            // onChange={noAct}

            onChange={(e) =>
              setValues({ ...values, telpPerushaan: e.target.value })
            }
          />
          <InputCompCustom
            labelFor={"Pendapatan Bulanan"}
            labelTxt={"Pendapatan Bulanan"}
            inputProps={{
              type: "text",
              placeholder: "",
              // maxLength: 6,
            }}
            value={values.pendapatan}
            // onChange={noAct}

            onChange={(e) =>
              setValues({ ...values, pendapatan: e.target.value })
            }
          />
        </div>
        <div className="text-center">
          <div className="mb-3">
            <CheckComp
              lable={"Saya tidak bekerja"}
              onChange={handleCheckbox}
              checked={isChecked}
            />
          </div>

          <ButtonComp
            title={"Lanjut"}
            onClick={nextPage}
            className={"btn btn-primary"}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
}

export default InformasiPekerjaan;
