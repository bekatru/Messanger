import React from "react";
import Avatar from "./Avatar";

const ChatItem = ({ name = "Beka", surname = "Amatakhunov" }) => {
  const chat_item_style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const chat_item_name_style = {
    marginLeft: "8px",
  };

  return (
    <div className="chat_item" style={chat_item_style}>
      <Avatar />
      <span className="chat_item_name" style={chat_item_name_style}>
        {name + " " + surname}
      </span>
    </div>
  );
};

export default ChatItem;
