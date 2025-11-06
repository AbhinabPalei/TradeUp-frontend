import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
   <div className="container mt-5">
  <div className="row align-items-center">
    {/* Image Section */}
    <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
      <img src={imageURL} alt="img" className="img-fluid" />
    </div>

    {/* Text Section */}
    <div className="col-12 col-md-6 p-md-5 mt-3 mt-md-5 text-center text-md-start">
      <h1>{productName}</h1>
      <p>{productDescription}</p>

      {/* Action Buttons */}
      <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3">
        <a href={tryDemo} className="btn btn-primary">
          Try Demo
        </a>
        <a href={learnMore} className="btn btn-outline-primary">
          Learn More
        </a>
      </div>

      {/* App Badges */}
      <div className="mt-4 d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3">
        <a href={googlePlay}>
          <img
            src="media/images/googlePlayBadge.svg"
            alt="Google Play"
            className="img-fluid"
            style={{ maxWidth: "180px" }}
          />
        </a>
        <a href={appStore}>
          <img
            src="media/images/appstoreBadge.svg"
            alt="App Store"
            className="img-fluid"
            style={{ maxWidth: "180px" }}
          />
        </a>
      </div>
    </div>
  </div>
</div>

  );
};

export default LeftSection;
