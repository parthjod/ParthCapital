import React from "react";

function RightComp({imageURL, productName, productDescription}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1 className="mb-4">{productName}</h1>
          <p className="fs-5 text-muted">{productDescription}</p>
          <div>
            <a href="/" className="fw-medium" style={{textDecoration: "none"}}>
              Learn More {""}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="col-6 mb-5" style={{marginBottom: "10px"}}>
          <img src={imageURL} alt="img4" />
        </div>
      </div>
    </div>
  );
}

export default RightComp;
