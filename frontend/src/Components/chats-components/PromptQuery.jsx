import React from "react";

function PromptQuery({ querydata }) {
  return (
    <div className="main-chat-box">
      <div className="written-text">
        <p>{querydata}</p>
      </div>
    </div>
  );
}

export default PromptQuery;
