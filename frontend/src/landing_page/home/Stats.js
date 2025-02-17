import React from "react";

function Stats() {
  return (
    <div>
      <div className="container p-3">
        <div className="row p-5">
          <div className="col-6 p-5 ">
            <h1 className="mb-5 fs-2">Trust with confidence</h1>
            <h3 className="fs-4">Customer-first always</h3>
            <p className="text-muted lh-lg">
              That's why 1.3+ crore customers trust Zerodha with 3.5+ lakh
              crores worth of equity investments
            </p>
            <h3 className="fs-4">No spam or gimmicks</h3>
            <p className="text-muted lh-lg">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
            <h3 className="fs-4">The Zerodha universe</h3>
            <p className="text-muted lh-lg">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h3 className="fs-4">Do better with money</h3>
            <p className="text-muted lh-lg">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col-6 p-5">
            <img
              src="media\Zassets\ecosystem.png"
              alt="ecosystem"
              style={{ width: "110%" }}
            />
            <div className="text-center">
              <a className="mx-5" href="/" style={{ textDecoration: "none" }}>
                Explore our products <i class="fa-solid fa-right-long"></i>
              </a>
              <a href="/" style={{ textDecoration: "none" }}>
                Try kite demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
