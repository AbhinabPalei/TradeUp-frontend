import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          {/* Logo & Info */}
          <div className="col-12 col-sm-6 col-lg-3 mb-4">
            <h1 className="trade-Logo">TradeUp</h1>
            <p>&copy; 2010 - 2025, TradeUp Broking Ltd. All rights reserved.</p>
          </div>

          {/* Company */}
          <div className="col-12 col-sm-6 col-lg-3 mb-4">
            <p className="fs-5">Company</p>
            <a href="" className="text-decoration-none text-muted d-block mb-2">
              About
            </a>
            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Philosophy
            </a>
            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Press & media
            </a>
            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Careers
            </a>
            <a href="" className="text-decoration-none text-muted d-block mb-2">
              TradeUp Cares (CSR)
            </a>
            <a href="" className="text-decoration-none text-muted d-block mb-2">
              TradeUp.tech
            </a>
            <a href="" className="text-decoration-none text-muted d-block">
              Open source
            </a>
          </div>

          {/* Support */}
          <div className="col-12 col-sm-6 col-lg-3 mb-4">
            <p className="fs-5">Support</p>
            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Contact us
            </a>
            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Support portal
            </a>
            <a href="" className="text-decoration-none text-muted d-block mb-2">
              How to file a complaint?
            </a>
            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Status of your complaints
            </a>
            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Bulletin
            </a>
            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Circular
            </a>
            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Z-Connect blog
            </a>
            <a href="" className="text-decoration-none text-muted d-block">
              Downloads
            </a>
          </div>

          {/* Account */}
          <div className="col-12 col-sm-6 col-lg-3 mb-4">
            <p className="fs-5">Account</p>
            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Open demat account
            </a>
            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Minor demat account
            </a>
            <a href="" className="text-decoration-none text-muted d-block mb-2">
              NRI demat account
            </a>
            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Commodity
            </a>
            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Dematerialisation
            </a>
            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Fund transfer
            </a>
            <a href="" className="text-decoration-none text-muted d-block mb-2">
              MTF
            </a>
            <a href="" className="text-decoration-none text-muted d-block">
              Referral program
            </a>
          </div>
        </div>

        {/* Disclaimer Text */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            TradeUp Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through TradeUp
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through TradeUp Commodities Pvt. Ltd. MCX: 46025; SEBI
            Registration no.: INZ000038238 Registered Address: TradeUp Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, odisha - 560078, India. For any
            complaints pertaining to securities broking please write to
            complaints@TradeUp.com, for DP related to dp@TradeUp.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of TradeUp and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
