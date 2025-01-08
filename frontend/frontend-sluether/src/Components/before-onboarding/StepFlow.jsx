import React from "react";

function StepFlow() {
  return (
    <div className="stepper">
      <div className="step active">
        <span>1</span>
        <div className="step-label">Step 1</div>
      </div>
      <div className="step">
        <span>2</span>
        <div className="step-label">Step 2</div>
      </div>
      <div className="step">
        <span>3</span>
        <div className="step-label">Step 3</div>
      </div>
      <div className="step">
        <span>4</span>
        <div className="step-label">Step 4</div>
      </div>
      <div className="step">
        <span>5</span>
        <div className="step-label">Step 5</div>
      </div>
    </div>
  );
}

export default StepFlow;
