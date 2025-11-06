import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-12 col-md-6 p-3 p-md-5 mt-3 mt-md-5 text-center text-md-start">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} className="btn btn-outline-primary mt-3">
              Learn More
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 text-center">
          <img src={imageURL} alt="img" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
