import React from "react";

function Hero() {
  return (
    <div className="container p-5 text-center text-light-emphasis">
      <div
        className="row mb-5 border-bottom p-5"
        style={{ marginBottom: "60px" }}
      >
        <h1>We pioneered the discount broking model in India.</h1>
        <h1>Now, we are breaking ground with our technology.</h1>
      </div>
      <div className="row my-5 text-center">
        <div
          className="col mt-5 mx-5 text-start "
          style={{ marginBottom: "100px" }}
        >
          <h5 className="fw-normal lh-base">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </h5>
          <br></br>
          <h5 className="fw-normal lh-base">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </h5>
          <br></br>
          <h5 className="fw-normal lh-base">
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </h5>
        </div>
        <div className="col mt-5 mx-5 text-start">
          <h5 className="fw-normal lh-base">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </h5>
          <br></br>
          <h5 className="fw-normal lh-base">
            <a href="/" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </h5>
          <br></br>
          <h5 className="fw-normal lh-base">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              blog{" "}
            </a>
            or see what the media is{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              saying about us.
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Hero;
