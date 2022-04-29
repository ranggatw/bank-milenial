import React, { useCallback, useMemo, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { registerNasabah } from "../../redux/registerUserSlice";
import ButtonComp from "../Button/ButtonComp";
import ButtonNext from "../Button/ButtonNext";
import { useNavigate } from "react-router-dom";

const baseStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "50%",
  minHeight: "320px",
  padding: "10px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#2196f3",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  transition: "border .3s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function UploadImageEktp(props) {
  const dataNasabah = useSelector((store) => store.nasabah);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(dataNasabah);
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState("");

  // console.log(convertImage, "asdasdsadasd");
  const convertImage = () => {
    var formData = new FormData();
    console.log(files[0].preview);
    // console.log(formData);
    // if (files.length == 0) {
    //   console.log("huwwwee");
    // } else {
    formData.append("file", files[0].preview);
    // }
  };

  let MAX_SIZE = 1000000;

  const onDrop = useCallback((acceptedFiles) => {
    // console.log(acceptedFiles, "filess");
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    fileRejections,
  } = useDropzone({
    // onDrop: (acceptedFiles, fileRejections) => {
    //   fileRejections.forEach((file) => {
    //     file.errors.forEach((err) => {
    //       if (err.code === "file-too-large") {
    //         setErrors(`Error: ${err.message}`);
    //       }
    //     });
    //   });
    //   acceptedFiles.forEach((file) => {
    //     console.log(file, "filessa ccc");
    //   });
    // },
    // maxSize: MAX_SIZE,
    onDrop,
    accept: "image/jpeg",
    maxSize: MAX_SIZE,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <div key={file.path}>
      {file.path} - {(file.size / 1024000).toFixed(2)}MB
      <div>
        {errors.map((e) => (
          <div className="text-center" style={{ color: "red" }} key={e.code}>
            {/* {e.message}
            {console.log(e)} */}
            Harap periksa kembali format dan ukuran data yang Anda upload!
          </div>
        ))}
      </div>
    </div>
  ));

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <img
        style={{ maxHeight: "100%", maxWidth: "100%", margin: "auto" }}
        src={file.preview}
        alt={file.name}
      />
      <div className="">
        <span>{(file.size / 1024000).toFixed(2)}MB | </span>
        <span>{file.name}</span>
      </div>
    </div>
  ));
  const thumbsRedux = dataNasabah.dataNasabah.ktpImg.map((file) => (
    <div key={file.name}>
      <img
        style={{ maxHeight: "100%", maxWidth: "100%", margin: "auto" }}
        src={file.preview}
        alt={file.name}
      />
      <div className="">
        <span>{(file.size / 1024000).toFixed(2)}MB | </span>
        <span>{file.name}</span>
      </div>
    </div>
  ));

  const noAct = () => {
    console.log("Haha ngapain di klick");
  };

  // const checkSizeFile = files.map((file) => (
  //   <div>{file.size > MAX_SIZE ? "terlalu besar" : "oke"}</div>
  // ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const saveImage = () => {
    localStorage.setItem("imageSelfiKtp", files[0].preview);
    // convertImage();
    // console.log(convertImage, "asdasdsadasd");
    // setFiles([]);
    // dispatch(registerNasabah({ ktpImg: files }));
    navigate("/create-password", { state: files[0].preview });
  };

  const deleteImage = () => {
    console.log("delete");
    setFiles([]);
  };

  // console.log(thumbsRedux, "redux");
  // console.log(dataNasabah.dataNasabah.ktpImg[0].preview);

  return (
    <div>
      <h5 className="text-center mb-4">Upload Foto Selfie dan e-KTP</h5>
      <section className="d-flex justify-content-center">
        <div></div>
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          {files && files.length > 0 ? (
            ""
          ) : (
            <div className="fw-bold">
              Upload Foto Selfie dan e-KTP Anda disini.
            </div>
          )}
          {/* {files && files.length > 0 ? (
            " console.log(dataNasabah.dataNasabah.ktpImg[0].preview)"
          ) : (
            <div>{thumbs}</div>
            )} */}

          <div>{thumbs}</div>
          <div>{fileRejectionItems}</div>
          {/* <div>{checkSizeFile}</div> */}
          {/* <div>{files ? files[0].size : " "}</div> */}
        </div>
      </section>
      <div className="text-center pt-4  ">
        {files && files.length == 0 ? (
          ""
        ) : (
          <ButtonComp
            title={"Upload Ulang"}
            onClick={deleteImage}
            disabled={false}
            className={"btn btn-link btn-sm"}
          />
        )}
        <div className="m-2">
          {files && files.length == 0 ? (
            <ButtonComp
              title={"Gunakan foto"}
              onClick={noAct}
              disabled={true}
              className={"btn btn-primary btn-md"}
            />
          ) : (
            <ButtonNext title={"Gunakan foto"} onClick={saveImage} />
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadImageEktp;
