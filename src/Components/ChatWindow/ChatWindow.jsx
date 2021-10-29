import React from "react";

import Message from "../../Components/UI/Message/Message";

const ChatWindow = (props) => {
  return (
    <>
      <div className="flex flex-col w-full overflow-y-scroll h-90 ">
        {props.messages.map((message) => (
          <Message text={message.text} sent={message.sent} />
        ))}
      </div>
      <input
        placeholder="Type a message"
        className="right-0 z-30 w-full h-12 px-4 border border-gray-500 rounded-full bottom-4"
      />
      <button
        text="Send"
        className="absolute z-40 text-sm text-blue-600 bottom-12 right-4 "
      >
        Send
      </button>
    </>
  );
};

export default ChatWindow;
