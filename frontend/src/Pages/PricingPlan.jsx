import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function PricingPlan() {
  const { setPage } = useOutletContext();
  useEffect(() => {
    setPage("pricing");
  }, []);
  return (
    <div className="container">
      <h2 className="pricing-header">Upgrade your plan</h2>

      <div className="row justify-content-center whole-pricing-card ">
        <div className="col-lg-4 col-md-6 ">
          <div className="pricing-card mt-3 text-start">
            <h5 className="fw-bold">Free trial</h5>
            <div className="d-flex  gap-2">
              <p className="price ">$0</p>
              <p className="price-subtext pt-4 ps-1 ">
                USE/
                <br />
                month
              </p>
            </div>

            <p>See how Sleuther can help create report-ready comments</p>
            <button className=" rounded-pill btn-current-plan" disabled>
              Your current plan
            </button>
            <ul className="list-unstyled mt-3 text-start">
              <li>• 50 generated comments</li>
              <li>• Basic comment bank</li>
            </ul>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6"
          style={{
            border: "1px solid rgba(182, 179, 179, 1",
            borderTop: "none",
            borderBottom: "none",
          }}
        >
          <div className="pricing-card mt-3 text-start">
            <h5 className="fw-bold ">Standard</h5>
            <div className="d-flex  gap-2">
              <p className="price ">$15</p>
              <p className="price-subtext pt-4 ps-1">
                USE/
                <br />
                month
              </p>
            </div>
            <p>Unlock Sleuther and boost your productivity</p>
            <button className="btn rounded-pill btn-dark upgrade-button">
              Upgrade your plan
            </button>
            <ul className="list-unstyled mt-3 text-start">
              <li>• Everything in free trial</li>
              <li>• 200 generated comments per month</li>
              <li>• Unlimited comment bank</li>
              <li>• Save all chats</li>
              <li>• Export chats</li>
            </ul>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="pricing-card mt-3 text-start">
            <h5 className="fw-bold ">Pro</h5>
            <div className="d-flex  gap-2">
              <p className="price ">$24</p>
              <p className="price-subtext pt-4 ps-1">
                USE/
                <br />
                month
              </p>
            </div>

            <p>Unlimited comment generation</p>
            <button className="btn rounded-pill btn-dark upgrade-button">
              Upgrade your plan
            </button>
            <ul className="list-unstyled mt-3 text-start">
              <li>• Everything in Standard</li>
              <li>• Unlimited comment generation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPlan;
