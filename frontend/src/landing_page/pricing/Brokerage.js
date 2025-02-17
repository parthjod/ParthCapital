import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4 text-start">
          <a href="/" style={{textDecoration: "none"}}>
            <h3 className="fs-5 mt-3 mb-5 ms-3">Brokerage Calculator</h3>
          </a>
          <ul>
            <li className="mb-3">
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li className="mb-3">
              Digital contract notes will be sent via e-mail.
            </li>
            <li className="mb-3">
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Couries charges apply.
            </li>
            <li className="mb-3">
              For NRI account (non-PSI), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li className="mb-3">
              For NRI account (PSI), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="mb-3">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
