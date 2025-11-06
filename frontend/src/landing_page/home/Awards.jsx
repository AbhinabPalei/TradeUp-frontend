import React from 'react'

const Awards = () => {
  return (
    <div className="container mt-5">
  <div className="row align-items-center">
    <div className="col-lg-6 col-12 p-4 text-center text-lg-start">
      <img
        src="media/images/largestBroker.svg"
        alt="left-side"
        className="img-fluid"
      />
    </div>

    <div className="col-lg-6 col-12 p-4 mt-4 mt-lg-0">
      <h1>Largest stock broker in India</h1>
      <p className="mb-5">
        2+ million clients contribute to over 15% of a volume in India daily by
        trading and investing in:
      </p>

      <div className="row">
        <div className="col-6">
          <ul>
            <li><p>Futures and Options</p></li>
            <li><p>Commodity derivatives</p></li>
            <li><p>Currency derivatives</p></li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li><p>Stocks and IPOs</p></li>
            <li><p>Direct mutual funds</p></li>
            <li><p>Bonds and Govt. Securities</p></li>
          </ul>
        </div>
      </div>

      <img
        src="media/images/pressLogos.png"
        alt="press-logos"
        className="img-fluid mt-4"
        style={{ maxWidth: "90%" }}
      />
    </div>
  </div>
</div>

  )
}

export default Awards
