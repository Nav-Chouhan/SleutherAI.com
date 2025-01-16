import React from "react";
import TextareaAutosize from "react-autosize-textarea";

function PromptBar({ handleChange }) {
  return (
    <div className="input-box ">
      <div className="">
        <TextareaAutosize
          onChange={handleChange}
          placeholder="E.g., Leaky faucet in the kitchen (add specifics if needed)"
          style={{
            width: "100%",
            minWidth: "10rem",
            minHeight: "45px",
            maxHeight: "10em",
            borderRadius: "100px",
            padding: "10px 30px",
            fontSize: "14px",
            boxSizing: "border-box",
            resize: "none",
          }}
        />
        <div className="input-btn">
          <a href="#">GENERATE</a>
        </div>
      </div>
      <div className="bottom-text d-flex">
        <p
          className="tip-text"
          style={{
            paddingLeft: "8px",
            paddingTop: "0px",
            fontSize: "12px",
            lineHeight: "16.34px",
            textAlign: "left",
          }}
        >
          <span>Pro Tip:</span> The more you share, the sharper the details
          Sleuther adds.
        </p>
        <p className="tip-text">
          <a href="#">More pro tips</a>
        </p>
      </div>
    </div>
  );
}

export default PromptBar;
