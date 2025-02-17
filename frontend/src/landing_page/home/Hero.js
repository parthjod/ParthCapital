import React from "react";

function Hero() {
  return (
    <div className="container mb-5">
      <div className="row text-center">
        <img src="media/Zassets/homeHero.png" alt="heroImg" className="mb-5" />
        <h1 className="mt-5">Invest in everything</h1>
        <h5 className="my-5 fw-normal">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </h5>
        <div class="d-grid gap-2 col-2 mx-auto">
          <button type="button" class="btn btn-primary fs-5 mb-5">
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
