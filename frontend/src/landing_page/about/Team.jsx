import React from "react";

const Team = () => {
  return (
    <div>
  <div className="container">
    {/* Heading */}
    <div className="row p-3 mt-5 border-top">
      <h1 className="text-center">People</h1>
    </div>

    {/* Content */}
    <div
      className="row p-3 text-muted"
      style={{ fontSize: "1.1em", lineHeight: "1.8" }}
    >
      {/* Image Column */}
      <div className="col-12 col-md-6 p-3 text-center">
        <img
          src="media/images/mypic.jpg"
          alt="img"
          className="img-fluid rounded-circle"
          style={{ width: "50%", maxWidth: "220px" }}
        />
        <h4 className="mt-4">Abhinab Palei</h4>
        <h6>Founder, CEO</h6>
      </div>

      {/* Text Column */}
      <div className="col-12 col-md-6 p-3">
        <p>
          Abhinab bootstrapped and founded TradeUp in 2024 to overcome the
          hurdles he faced during his decade long stint as a trader. Today,
          TradeUp has changed the landscape of the Indian broking industry.
        </p>

        <p>
          He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
          and the Market Data Advisory Committee (MDAC).
        </p>

        <p>Playing basketball is his zen.</p>

        <p>
          Connect on{" "}
          <a href="" className="text-decoration-none">
            Homepage
          </a>{" "}
          /{" "}
          <a href="" className="text-decoration-none">
            TradingQnA
          </a>{" "}
          /{" "}
          <a href="" className="text-decoration-none">
            Twitter
          </a>
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Team;
