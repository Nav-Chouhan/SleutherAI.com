import React, { useEffect } from "react";
import Button from "../Components/before-onboarding/Button";
import StepFlow from "../Components/before-onboarding/StepFlow";
import { useOutletContext } from "react-router-dom";

function OnboardingPage2() {
  const { step, setStep, setPage } = useOutletContext();

  // updating step flow
  useEffect(() => {
    setStep(3);
    setPage("");
  }, [step]);

  return (
    <section className="step-sec">
      <div className="container">
        <StepFlow step={step} />
        <div>
          <div className="back-icon">
            <svg
              width="2.25rem"
              height="2.25rem"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_5)">
                <mask
                  id="mask0_1_5"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                >
                  <path d="M36 0H0V36H36V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_1_5)">
                  <path
                    d="M25.7551 36C25.5577 36.0012 25.362 35.9633 25.1792 35.8887C24.9965 35.814 24.8303 35.7041 24.6901 35.565L12.4351 23.31C11.7366 22.6133 11.1825 21.7857 10.8044 20.8745C10.4263 19.9634 10.2317 18.9865 10.2317 18C10.2317 17.0135 10.4263 16.0367 10.8044 15.1255C11.1825 14.2144 11.7366 13.3867 12.4351 12.69L24.6901 0.435034C24.83 0.295176 24.996 0.184235 25.1787 0.108544C25.3615 0.0328539 25.5573 -0.00610351 25.7551 -0.00610352C25.9529 -0.00610352 26.1487 0.0328539 26.3315 0.108544C26.5142 0.184235 26.6802 0.295176 26.8201 0.435034C26.96 0.574892 27.0709 0.740927 27.1466 0.92366C27.2223 1.10639 27.2612 1.30225 27.2612 1.50003C27.2612 1.69782 27.2223 1.89367 27.1466 2.07641C27.0709 2.25914 26.96 2.42518 26.8201 2.56503L14.5651 14.82C13.7224 15.6638 13.2491 16.8075 13.2491 18C13.2491 19.1925 13.7224 20.3363 14.5651 21.18L26.8201 33.435C26.9607 33.5745 27.0723 33.7404 27.1484 33.9232C27.2246 34.106 27.2638 34.302 27.2638 34.5C27.2638 34.6981 27.2246 34.8941 27.1484 35.0769C27.0723 35.2597 26.9607 35.4256 26.8201 35.565C26.6799 35.7041 26.5137 35.814 26.331 35.8887C26.1482 35.9633 25.9525 36.0012 25.7551 36Z"
                    fill="#808080"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_5">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
              <div className="content">
                <h2>Personalization</h2>
                <div className="mb-3 step-drop-down">
                  <label htmlFor="personalizationSelect" className="form-label">
                    Refer to the inspector as
                  </label>
                  <select className="form-select" id="personalizationSelect">
                    <option value="We">"We"</option>
                    <option value="I">"I"</option>
                  </select>
                  <small className="text-muted">
                    Example: "We recommend," or "I recommend."
                  </small>
                  <div className="navigation onboarding-pages-button">
                    <Button text={"Next"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnboardingPage2;
