import React from "react";

function Education() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <img
              style={{ marginTop: "-50px" }}
              src="media\Zassets\education.svg"
              alt="education ms-5"
            />
          </div>
          <div className="col-6">
            <h1 className="fs-2 mb-3">Free and open market education</h1>
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="/" style={{ textDecoration: "none" }}>
              Varsity <i class="fa-solid fa-arrow-right"></i>
            </a>
            <p className="mt-5">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="/" style={{ textDecoration: "none" }}>
              TradingQ&A <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
