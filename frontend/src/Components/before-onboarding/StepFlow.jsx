import React from "react";
import { FaRegStopCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";

function StepFlow({ step }) {
  return (
    <div className="stepper">
      <div className="step active">
        {step > 1 && <IoIosCheckmarkCircle className="flow-icon" />}
        {step == 1 && <FaRegStopCircle className="flow-icon" />}
        {step < 1 && <FaRegCircle className="flow-icon flow-icon-grey" />}
        <div
          className={`step-label ${
            step < 1 ? "flow-icon-grey" : "flow-icon-dark"
          }`}
        >
          Step 1
        </div>
      </div>
      <div className="step">
        {step > 2 && <IoIosCheckmarkCircle className="flow-icon" />}
        {step == 2 && <FaRegStopCircle className="flow-icon" />}
        {step < 2 && <FaRegCircle className="flow-icon flow-icon-grey" />}
        <div
          className={`step-label ${
            step < 2 ? "flow-icon-grey" : "flow-icon-dark"
          }`}
        >
          Step 2
        </div>
      </div>
      <div className="step">
        {step > 3 && <IoIosCheckmarkCircle className="flow-icon" />}
        {step == 3 && <FaRegStopCircle className="flow-icon" />}
        {step < 3 && <FaRegCircle className="flow-icon flow-icon-grey" />}
        <div
          className={`step-label ${
            step < 3 ? "flow-icon-grey" : "flow-icon-dark"
          }`}
        >
          Step 3
        </div>
      </div>
      <div className="step">
        {step > 4 && <IoIosCheckmarkCircle className="flow-icon" />}
        {step == 4 && <FaRegStopCircle className="flow-icon" />}
        {step < 4 && <FaRegCircle className="flow-icon flow-icon-grey" />}
        <div
          className={`step-label ${
            step < 4 ? "flow-icon-grey" : "flow-icon-dark"
          }`}
        >
          Step 4
        </div>
      </div>
      <div className="step">
        {step > 5 && <IoIosCheckmarkCircle className="flow-icon" />}
        {step == 5 && <FaRegStopCircle className="flow-icon" />}
        {step < 5 && <FaRegCircle className="flow-icon flow-icon-grey" />}
        <div
          className={`step-label ${
            step < 5 ? "flow-icon-grey" : "flow-icon-dark"
          }`}
        >
          Step 5
        </div>
      </div>
    </div>
  );
}

export default StepFlow;
