import React from "react";

function Message({message}) {
  return (
    <h3>
      <span className="badge amber darken-2">{message.content}</span>
    </h3>
  );
}

export default Message;
