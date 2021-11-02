import React, { useRef } from "react";

import Message from "../../Components/UI/Message/Message";

const ChatWindow = (props) => {
  const msgTextRef = useRef(null);
  return (
    <>
      <div className="flex flex-col w-full overflow-y-scroll h-90 ">
        {props.messages.map(
          (message) => (
            console.log(message),
            (
              <Message
                text={message.text}
                activeUser={props.activeUser}
                userId={message.user}
                sent={message.sent}
              />
            )
          )
        )}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.sendMessage(msgTextRef.current.value);
          msgTextRef.current.value = "";
        }}
        className="relative"
      >
        <input
          ref={msgTextRef}
          placeholder="Type a message"
          className="right-0 z-30 w-full h-12 px-4 border border-gray-500 rounded-full bottom-4"
        />
        <button
          text="Send"
          className="absolute z-40 text-sm text-blue-600 bottom-1/4 right-4 "
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ChatWindow;
