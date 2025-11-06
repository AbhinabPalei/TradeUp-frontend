// frontend/src/landing_page/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="container p-2">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <h1 className="trade-Logo">TradeUp</h1>
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links aligned to the right */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/product">Product</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/support">Support</Link>
            </li>

            {/* Auth area - keeps layout but injects Clerk UI */}
            <li className="nav-item ms-3">
              <SignedOut>
                {/* opens Clerk modal; redirectUrl can be /dashboard */}
                <SignInButton mode="modal" redirectUrl="/dashboard">
                  <button className="nav-link btn btn-link" style={{ textDecoration: "none" }}>
                    Sign In / Sign Up
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
