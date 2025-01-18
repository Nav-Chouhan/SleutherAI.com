import React from "react";

function PricingPlan() {
  return (
    <div className="container">
      <h2 className="pricing-header">Upgrade your plan</h2>

      <div className="row justify-content-center whole-pricing-card ">
        <div className="col-lg-4 col-md-6 ">
          <div className="pricing-card mt-3 text-start">
            <h5 className="fw-bold">Free trial</h5>
            <p className="price">$0</p>
            <p className="price-subtext">USE/month</p>

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
            <p className="price ">$15</p>
            <p className="price-subtext">USE/month</p>
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
            <p className="price ">$24</p>
            <p className="price-subtext">USE/month</p>
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
