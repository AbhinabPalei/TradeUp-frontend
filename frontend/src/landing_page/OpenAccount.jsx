import React from 'react'
import { SignedIn, SignedOut, SignUpButton } from "@clerk/clerk-react";

const OpenAccount = () => {
  return (
    
   <div className="container p-5 mb-5">
  <div className="row">
    <div className="col-12 text-center">
      <h1 className="mt-5">Open a TradeUp account</h1>
      <p>
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
        F&O trades.
      </p>
      <SignedOut>
        <SignUpButton mode="modal">
      <button
        className="
          btn btn-primary fs-5 mb-5 
          px-4 py-2 
           w-sm-50 w-md-25
        "
      >
        Sign up for free
      </button>
      </SignUpButton>
      </SignedOut>
    </div>
  </div>
</div>
  )
}

export default OpenAccount
