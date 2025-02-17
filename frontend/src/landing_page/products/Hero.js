import React from "react";

function Hero() {
  return (
    <div
      className="container text-center border-bottom text-secondary-emphasis"
      style={{margin: "70px"}}
    >
      <div className="mt-5 p-3">
        <h1
          className="mt-3"
          style={{
            color: "#424242",
          }}
        >
          Zerodha Products
        </h1>
        <p className="fs-4 mt-4" style={{color: "#424242"}}>
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="fs-5 mt-4" style={{color: "#424242", margin: "90px"}}>
          Check out our {""}{" "}
          <a href="/" style={{textDecoration: "none"}}>
            investment offerings {""}{" "}
            <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
