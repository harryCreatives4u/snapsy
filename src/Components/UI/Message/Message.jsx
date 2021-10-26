import React from "react";

const Message = (props) => {
  let messageFormatting = "text-gray-200 bg-blue-500 rounded-bl-none";

  if (props.sent) {
    messageFormatting = "text-gray-600 bg-gray-300  rounded-br-none self-end";
  }

  return (
    <div
      className={`p-2 py-1 m-2  rounded-lg ${messageFormatting}   w-fit-content`}
    >
      {props.text}
    </div>
  );
};

export default Message;
