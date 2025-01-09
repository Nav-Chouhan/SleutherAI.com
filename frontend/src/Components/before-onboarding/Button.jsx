import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";

function Button({ text, type = "button" }) {
  return (
    <div className="input-btn ">
      <button type={type} className="gap-2">
        {text} <FaArrowRightLong />
      </button>
    </div>
  );
}

export default Button;
