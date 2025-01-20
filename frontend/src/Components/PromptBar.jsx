import React, { useRef } from "react";
import TextareaAutosize from "react-autosize-textarea";

function PromptBar({ handleChange, inputBoxExpanded, setInputBoxExpanded }) {
  const textareaRef = useRef(null);
  const handleTextChange = (event) => {
    if (handleChange) {
      handleChange(event);
    }
    if (textareaRef.current.scrollHeight > 50) {
      setInputBoxExpanded(true);
    } else {
      setInputBoxExpanded(false);
    }
  };
  return (
    <div className="input-box ">
      <div className="">
        <TextareaAutosize
          ref={textareaRef}
          onChange={handleTextChange}
          placeholder="E.g., Leaky faucet in the kitchen (add specifics if needed)"
          style={{
            width: "100%",
            minHeight: "45px",
            maxHeight: "10em",
            borderRadius: inputBoxExpanded ? "20px" : "100px",
            padding: "10px 30px 10px 10px",
            fontSize: "14px",
            boxSizing: "border-box",
            resize: "none",
            overflowY: "scroll",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        />
        <div className="input-btn" style={{ position: "relative" }}>
          <a
            style={{ position: "absolute", bottom: "16px", right: "0px" }}
            href="#"
          >
            GENERATE
          </a>
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
