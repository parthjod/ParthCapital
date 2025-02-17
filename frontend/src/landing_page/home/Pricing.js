import React from "react";

function Pricing() {
  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="col-4 p-3">
            <h1 className="p-3 fs-2">Unbeatable pricing</h1>
            <p className="lh-lg p-3 fw-normal">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="/" style={{ textDecoration: "none" }}>
              See pricing <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-2"></div>
          <div className="col-6 mb-5">
            <div className="row text-center my-5">
              <div className="col p-2 border">
                <img
                  className="mb-3 my-5"
                  src="media\Zassets\pricing0.svg"
                  alt="zero"
                  style={{ width: "40%" }}
                />
                <p>
                  Free equity delivery and <br />
                  direct mutual funds
                </p>
              </div>
              <div className="col p-2 border">
                <img
                  className="mb-3 my-5"
                  src="media\Zassets\pricing20.svg"
                  alt="zero"
                  style={{ width: "40%" }}
                />
                <p>Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
