import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import SignatureCanvas from "react-signature-canvas";
import "./sigCanvas.css";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerNasabah } from "../../redux/registerUserSlice";

function TandaTanganDigital() {
  const dispatch = useDispatch();
  const [imageURL, setImageURL] = useState(null); // create a state that will contain our image url
  const [signImg, setSignImg] = useState(null);
  const sigCanvas = useRef({});
  const clear = () => sigCanvas.current.clear();
  // const closed = () => sigCanvas.current.close();

  const previewSign = () => {
    setSignImg(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
    console.log(
      sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"),
      "wkwkkwkew"
    );
  };

  const savedSign = () => {
    dispatch(registerNasabah({ signatureImg: signImg }));
    // setSignImg(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
    // console.log(signImg);
  };

  const retakeSign = () => {
    setSignImg(null);
    setImageURL(null);
  };
  // console.log(imageURL, "imagae");

  return (
    <div
      style={{
        minHeight: "calc(100vh - 137.5px)",
        paddingTop: "8rem",
      }}
    >
      <div className="d-flex flex-column text-center mb-5">
        <h3 className="fw-bold">Tanda Tangan Digital</h3>
        <div>
          Bubuhkan tanda tangan sesuai dengan e-KTP di dalam kotak yang sudah
          disediakan
        </div>
      </div>
      <div className="text-center">
        {imageURL !== null ? (
          ""
        ) : (
          <div className="signatureContainer">
            <div className="mb-5">
              <SignatureCanvas
                ref={sigCanvas}
                penColor="#000"
                canvasProps={{
                  width: 300,
                  height: 200,
                  className: "signatureCanvas",
                }}
              />
            </div>
            <div className="">
              <Button className="btn-primary btn-sm me-4" onClick={previewSign}>
                Save
              </Button>
              <Button className="btn-danger btn-sm me-4" onClick={clear}>
                Clear
              </Button>
            </div>
          </div>
        )}
        {imageURL ? (
          <div>
            <div className="mb-3">
              <img
                ref={sigCanvas}
                src={imageURL}
                alt="my signature"
                className="signaturePreview"
              />
            </div>
            <div>
              <Button className="btn-primary btn-sm me-4" onClick={retakeSign}>
                Ulangi
              </Button>
            </div>
            <div>
              <Button
                ref={sigCanvas}
                className="btn-primary btn-sm me-4"
                onClick={savedSign}
              >
                Gunakan Tanda Tangan
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default TandaTanganDigital;
