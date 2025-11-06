import React from "react";

const Brokerage = () => {
  return (
   <div className="container">
  <div className="row p-5 mt-5 text-center border-top">
    
    {/* Left Column */}
    <div className="col-12 col-md-8 p-4 text-md-start">
      <a href="" className="text-decoration-none">
        <h3 className="fs-5">Brokerage calculator</h3>
      </a>
      <ul className="lh-lg text-muted text-start">
        <li>0.03% or Rs. 20/executed order whichever is lower</li>
        <li>0.025% on the sell side</li>
        <li>NSE: 0.00297% BSE: 0.00375%</li>
        <li>18% on (brokerage + SEBI charges + transaction charges)</li>
        <li>₹10 / crore</li>
        <li>0.003% or ₹300 / crore on buy side</li>
      </ul>
    </div>

    {/* Right Column */}
    <div className="col-12 col-md-4 p-4">
      <a href="" className="text-decoration-none">
        <h3 className="fs-5">List of charges</h3>
      </a>
    </div>
  </div>
</div>

  );
};

export default Brokerage;
