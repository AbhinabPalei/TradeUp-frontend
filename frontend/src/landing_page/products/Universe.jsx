import React from "react";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/clerk-react";

const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The TradeUp Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-12 col-sm-6 col-md-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="img"
            className="img-fluid"
            style={{ maxWidth: "150px" }}
          />
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 p-1 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt="img"
            className="img-fluid"
            style={{ maxWidth: "150px", width: "100%", minWidth: "150px" }}
          />
          <p className="text-small text-muted mt-1">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="img"
            className="img-fluid"
            style={{
              width: "100%",
              maxWidth: "150px",
              minWidth: "150px",
            }}
          />
          <p className="text-small text-muted mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 p-3 mt-5">
          <h1 className="trade-Logo">TradeUp</h1>
          <p className="text-small text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt="img"
            className="img-fluid"
            style={{ maxWidth: "100px" }}
          />
          <p className="text-small text-muted mt-1">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 p-3 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            alt="img"
            className="img-fluid"
            style={{ maxWidth: "150px" }}
          />
          <p className="text-small text-muted mt-1">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>

        <div className="col-12 d-flex justify-content-center mt-4">
          <SignedOut>
            <SignUpButton mode="modal">
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "200px" }}
          >
            Signup Now
          </button>
          </SignUpButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Universe;
