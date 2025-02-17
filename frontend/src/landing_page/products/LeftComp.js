import React from "react";

function LeftComp({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt="img7" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1 className="mb-4">{productName}</h1>
          <p className="fs-5 text-muted">{productDescription}</p>
          <div>
            <a
              href={tryDemo}
              className="fw-medium"
              style={{textDecoration: "none"}}
            >
              Try Demo {""}
              <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a
              href={learnMore}
              className="fw-medium"
              style={{marginLeft: "50px", textDecoration: "none"}}
            >
              Learn More {""}
              <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media\Zassets\googlePlayBadge.svg" alt="playstore" />
            </a>
            <a href={appStore}>
              <img
                src="media\Zassets\appstoreBadge.svg"
                alt="appstore"
                style={{marginLeft: "50px"}}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftComp;
