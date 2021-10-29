import React from "react";

const Message = (props) => {
  let messageFormatting = "text-gray-200 bg-blue-500 rounded-bl-none";

  if (props.sent) {
    messageFormatting = "text-gray-600 bg-gray-300  rounded-br-none self-end";
  }

  return (
    <div
      className={`p-3 py-2 m-2 mx-4 xl:mx-2  rounded-lg  w-fit-content ${messageFormatting}`}
    >
      {props.text}
    </div>
  );
};

export default Message;
