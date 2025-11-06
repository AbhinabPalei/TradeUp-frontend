import React from "react";

const Hero = () => {
  return (
    <div className="container border-bottom mb-5">
      <div className="row">
        <div className="col-12 text-center mt-5">
          <h1 className="fs-2 fs-md-1">Technology</h1>
          <h3 className="text-muted mt-3 fs-5 fs-md-4">
            Sleek, modern, and intuitive trading platforms
          </h3>
          <p className="mt-3 mb-5 px-2 px-md-0">
            Check out our{" "}
            <a style={{ textDecoration: "none" }} href="">
              investment offerings <i className="fa-solid fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
