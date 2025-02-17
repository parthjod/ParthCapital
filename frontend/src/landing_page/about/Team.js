import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="mb-5 pb-5 text-light-emphasis">People</h1>
      </div>
      <div className="row">
        <div className="col ms-5 ps-5">
          <img
            src="media\Zassets\nithinKamath.jpg"
            alt="ceo"
            className="rounded-circle"
            style={{ width: "50%", marginLeft: "100px" }}
          />
          <h4
            className="text-secondary-emphasis fw-normal"
            style={{ marginLeft: "175px", marginTop: "30px" }}
          >
            Nithin Kamath
          </h4>
          <p
            className="fw-medium text-muted"
            style={{ marginLeft: "195px", marginTop: "25px" }}
          >
            Founder, CEO
          </p>
        </div>
        <div className="col text-center text-secondary-emphasis my-3">
          <h5 className="text-start fw-normal lh-base me-5 fs-5 mb-3">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </h5>
          <h5 className="fw-normal lh-base text-start me-5 fs-5 mb-3">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </h5>
          <h5 className="fw-normal lh-base text-start me-5 fs-5 mb-3">
            Playing basketball is his zen.
          </h5>
          <h5 className="fw-normal lh-base text-start me-5 fs-5 mb-3">
            Connect on{""}{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            {""} /{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            {""} / {""}
            <a href="/" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Team;
