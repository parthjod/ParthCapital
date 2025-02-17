import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 style={{marginTop: "80px", color: "#424242"}}>
          The Zerodha Universe
        </h1>
        <p className="pt-4 fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3">
          <img
            src="media\Zassets\zerodhaFundhouse.png"
            alt="fundhouse"
            style={{width: "50%", marginTop: "30px"}}
          />
          <p className="text-small text-muted mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media\Zassets\sensibullLogo.svg"
            alt="sensibull"
            style={{width: "50%", marginTop: "40px"}}
          />
          <p className="text-small text-muted mt-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media\Zassets\goldenpiLogo.png"
            alt="goldenpi"
            style={{width: "50%", marginTop: "30px"}}
          />
          <p className="text-small text-muted mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media\Zassets\streakLogo.png"
            alt="streak"
            style={{width: "40%", marginTop: "30px"}}
          />
          <p className="text-small text-muted mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/Zassets\smallcaseLogo.png"
            alt="smallcase"
            style={{marginTop: "30px"}}
          />
          <p className="text-small text-muted mt-4">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media\Zassets\dittoLogo.png "
            alt="ditto"
            style={{width: "30%", marginTop: "30px"}}
          />
          <p className="text-small text-muted mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
