import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "../Components/before-onboarding/Button";
import { useNavigate, useOutletContext } from "react-router-dom";

function LandingPage() {
  const { page, setPage } = useOutletContext();
  const navigate = useNavigate();

  // updating step flow
  useEffect(() => {
    setPage("landing");
  }, []);

  //handle submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/second-step");
  };
  return (
    <section className="land-sec">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <svg
              width="95"
              height="96"
              viewBox="0 0 95 96"
              fill="none"
              className="center-logo"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_3)">
                <path
                  d="M72.6691 95.3763H14.1603C5.93495 95.3763 0.00304351 90.9791 0.00304351 82.5468V28.8492C-0.134908 20.2099 4.43472 17.675 10.0562 15.0712C13.574 13.4503 18.4368 11.3638 24.524 8.91515C34.8014 4.75936 45.1994 0.844956 45.3029 0.810468L47.4412 0L49.5967 0.758738C49.7001 0.793226 60.1327 4.51794 70.4274 8.58751C92.103 17.1578 95 20.4168 95 28.0214V94.7728H82.5499V27.4351C77.1525 24.5037 61.5639 18.3131 47.5619 13.2606C33.6115 18.5545 18.1265 24.8313 12.4704 27.7283V82.9262H60.219V44.7826H34.7841V61.3885H41.2678V52.5596H53.718V73.8386H22.3167V32.3152L72.6691 32.3324V95.3763Z"
                  fill="#C8B28B"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_3">
                  <rect width="95" height="96" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="inner-text">
              <div className="heading">
                Get AI-Powered Home Inspection Comments. Instantly
              </div>
              <ul className="land-points">
                <li>
                  <span>Just type the main issue and location -</span> Sleuther
                  will fill in the rest with professional detail.
                </li>
                <li>
                  <span>Save your best comments</span> and build a powerful
                  comment bank for future reports.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="input-box-text">
              <div className="lable-text">
                Enter your SOP and try <span>free.</span>
              </div>
              <div className="lable-text-1">No credit card required</div>
            </div>
            <div className="input-box">
              <input type="text" placeholder="HIABC Scope of Inspection" />
              <div className="navigation">
                <Button handleSubmit={handleSubmit} text={"Try free"}></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
