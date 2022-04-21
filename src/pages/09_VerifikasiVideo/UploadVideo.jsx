// import React from 'react'

// function UploadVideo() {
//   return (
//     <div>UploadVideo</div>
//   )
// }

// export default UploadVideo

import React, { useCallback, useMemo, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { registerNasabah } from "../../redux/registerUserSlice";
// import ButtonComp from "../Button/ButtonComp";
import ButtonNext from "../../components/Button/ButtonNext";
import ButtonComp from "../../components/Button/ButtonComp";
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

function UploadVideo(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [files, setFiles] = useState([]);

  let MAX_SIZE = 10000000;

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
    // acceptedFiles,
    fileRejections,
  } = useDropzone({
    onDrop,
    accept: "video/*",
    maxSize: MAX_SIZE,
  });

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <div key={file.path}>
      {file.path} - {(file.size / 1024000).toFixed(2)}MB
      <div>
        {errors.map((e) => (
          <div className="text-center" style={{ color: "red" }} key={e.code}>
            file tidak boleh lebih dari 10 MB
          </div>
        ))}
      </div>
    </div>
  ));

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

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

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const saveVideo = () => {
    dispatch(registerNasabah({ videoVerfikasi: files }));
    navigate("/ttd");
  };

  const noAct = () => {
    console.log("Haha ngapain di klick");
  };

  return (
    <div
      className=""
      style={{
        minHeight: "calc(100vh - 137.5px)",
        paddingTop: "5rem",
      }}
    >
      <section className="d-flex justify-content-center">
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          {files && files.length > 0 ? (
            ""
          ) : (
            <div className="fw-bold">Upload Video Anda disini.</div>
          )}
          <div>{thumbs}</div>
          <div>{fileRejectionItems}</div>
        </div>
      </section>
      <div className="d-flex justify-content-center pt-4 ">
        <div className="m-2">
          {files && files.length == 0 ? (
            <ButtonComp
              title={"Upload"}
              onClick={noAct}
              disabled={true}
              className={"btn btn-primary btn-md"}
            />
          ) : (
            <ButtonNext title={"Upload"} onClick={saveVideo} />
          )}
          {/* <ButtonNext title={"Upload"} onClick={saveImage} /> */}
        </div>
      </div>
    </div>
  );
}

export default UploadVideo;
