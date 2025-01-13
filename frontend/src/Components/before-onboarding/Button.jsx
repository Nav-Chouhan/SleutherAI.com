import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";

function Button({ text, type = "button", handleSubmit }) {
  return (
    <div className="input-btn ">
      <button
        type={type}
        className="gap-2"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        {text} <FaArrowRightLong />
      </button>
    </div>
  );
}

export default Button;
