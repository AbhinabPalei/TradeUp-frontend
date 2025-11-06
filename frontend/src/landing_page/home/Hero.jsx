import React from "react";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/clerk-react";

const Hero = () => {
  return (
    <div className="container p-5 mb-5 hero-container">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="heroimg"
          className="mb-5"
          style={{ maxHeight: "350px", objectFit: "contain" }}
        />

        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and more
        </p>

        {/* 👇 When user is signed in */}
        <SignedIn>
          <a
            href="https://tradeup-dashboard.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 btn btn-primary fs-5 mb-5 hero-btn"
            style={{ margin: "auto" }}
          >
            GO to Dashboard
          </a>
        </SignedIn>

        {/* 👇 When user is signed out */}
        <SignedOut>
          <SignUpButton mode="modal">
            <button
              className="p-2 btn btn-primary fs-5 mb-5 hero-btn"
              style={{ margin: "auto" }}
            >
              Sign up for free
            </button>
          </SignUpButton>
        </SignedOut>
      </div>
    </div>
  );
};

export default Hero;
