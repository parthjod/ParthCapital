import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row border-bottom text-center p-5 mt-5">
        <h1>Pricing</h1>
        <h4 className="fs-4 text-muted mt-4">
          Free equity investments and flat ₹20 for intraday and F&O trades
        </h4>
        <div className="col-4 p-4 text-secondary-emphasis">
          <img
            src="media\Zassets\pricingEquity.svg"
            alt="equity"
            style={{width: "80%"}}
          />
          <h2 className="mb-4 ">Free equity delivery</h2>
          <h5 className="text-muted lh-base">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </h5>
        </div>
        <div className="col-4 p-4 text-secondary-emphasis">
          <img
            src="media\Zassets\intradayTrades.svg"
            alt="intraday"
            style={{width: "80%"}}
          />
          <h2 className="mb-4 fs-3">Intraday and F&O trades</h2>
          <h5 className="text-muted lh-base">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </h5>
        </div>
        <div className="col-4 p-4 text-secondary-emphasis">
          <img
            src="media\Zassets\pricingEquity.svg"
            alt="equity2"
            style={{width: "80%"}}
          />
          <h2 className="mb-4">Free direct MF</h2>
          <h5 className="text-muted lh-base">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </h5>
        </div>
      </div>
      <div className="row text-center">
        <h1 className="mt-5 fw-medium">Open a Zerodha account</h1>
        <h5 className="my-5 fw-normal">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </h5>
        <div class="d-grid gap-2 col-2 mx-auto">
          <button type="button" class="btn btn-primary fs-5 mb-5">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
