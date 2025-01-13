import React from "react";
import editIcon from "../assets/images/edit.svg";

function PastChats() {
  return (
    <div className="chat-show">
      <div className="new-chat-icon text-right pr-4 pt-4">
        <img src={editIcon} alt="" />
      </div>
      <div className="text-left pl-2">
        <small>No chats yet</small>
      </div>
    </div>
  );
}

export default PastChats;
