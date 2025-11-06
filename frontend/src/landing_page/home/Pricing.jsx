import React from "react";
import "../../landing_page/home/css/Pricing.css";

const Pricing = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="text-decoration-none">
            see pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Spacer (hidden on small screens) */}
        <div className="d-none d-lg-block col-lg-2"></div>

        {/* Right Section */}
        <div className="col-12 col-lg-6">
          <div className="row text-center g-3">
            <div className="col-12 col-md-6">
              <div className="border p-3 h-100">
                <h1 className="mb-3">$0</h1>
                <p>
                  Free equity delivery <br />
                  and direct mutual funds
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="border p-3 h-100">
                <h1>$20</h1>
                <p>Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
