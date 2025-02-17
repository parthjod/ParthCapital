import React from "react";

function Hero() {
  return (
    <div>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#387ed1",
          marginBottom: "70px",
          height: "600px",
          paddingTop: "30px",
          color: "#ffffff",
        }}
      >
        <div className="row ps-5">
          <div className="col pt-4">
            <h4
              className="text-start"
              style={{
                marginBottom: "0.1rem",
                marginTop: "1rem",
              }}
            >
              Support Portal
            </h4>
          </div>
          <div className="col text-end pt-5 me-5 fs-5">
            <a
              href="/"
              style={{color: "white", marginTop: "0.1rem", fontWeight: "500"}}
            >
              Track Tickets
            </a>
          </div>
        </div>
        <div className="row ps-5">
          <div className="col-8">
            <h5 className="fs-3 mt-5" style={{fontWeight: "400"}}>
              Search for an answer or browse help topics to create a
            </h5>
            <h5 className="fs-3" style={{fontWeight: "400"}}>
              ticket
            </h5>
            <input
              placeholder="Eg. how do i activate F&O ..."
              style={{
                color: "#ffffff",
                height: "65px",
                width: "600px",
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "start",
                paddingLeft: "25px",
                fontWeight: "500",
              }}
            />
            <div style={{marginTop: "20px"}}>
              <a href="/" className="fs-5" style={{color: "#ffffff"}}>
                {" "}
                Track account opening
              </a>
              <a
                href="/"
                className="fs-5"
                style={{color: "#ffffff", marginLeft: "20px"}}
              >
                {" "}
                Track segment activation
              </a>
              <a
                href="/"
                className="fs-5"
                style={{color: "#ffffff", marginLeft: "20px"}}
              >
                {" "}
                Intraday margins
              </a>
            </div>
            <p className="mt-3">
              <a href="/" className="fs-5" style={{color: "#ffffff"}}>
                Kite user manual
              </a>
            </p>
          </div>
          <div className="col-4 pe-5 mt-5">
            <div className="pe-5">
              <h4 className="mt-5">Featured</h4>
            </div>
            <p className="mb-4 mt-4">
              <a
                href="/"
                className="fs-5"
                style={{color: "#ffffff", lineHeight: "2rem"}}
              >
                1. MCX Crude option contract expiry - February 2025
                <br></br>
              </a>
            </p>

            <a
              href="/"
              className="fs-5 pb-5"
              style={{
                color: "#ffffff",
              }}
            >
              2. Latest Intraday leverages and Square-off timings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
