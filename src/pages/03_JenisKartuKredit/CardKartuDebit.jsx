import React from "react";
import { Link, useNavigate } from "react-router-dom";

function CardKartuDebit({ data }) {
  const navigate = useNavigate();

  // let params = useParams();
  // // console.log(data);
  // // console.log(params, "ehats");
  const goDetailProduct = () => {
    console.log(data.id, "ejehehehe");
    // const data = s
    navigate(`/jenis-kartu/${data.id}`, { state: data });
    console.log("click");
  };
  return (
    // <div onClick={goToNext} className="col-6 style-card ">
    <div onClick={goDetailProduct} className="col-6 style-card p-5 ">
      <div className="">
        <div className="d-flex">
          {data.imgKartu ? <img src={data.imgKartu} /> : ""}
          <div className="ms-5">
            <div className="d-flex flex-column justify-content-start">
              <div className="d-flex justify-content-start fw-bold">
                {data ? data.title : ""}
              </div>
              <div className="ms-3">
                <p>
                  {data
                    ? data.desc.map((desc, key) => <li key={key}>{desc}</li>)
                    : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardKartuDebit;
