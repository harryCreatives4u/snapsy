import React, { useRef } from "react";

import Message from "../UI/Message";
import LoadingSpinner from "../UI/LoadingSpinner";

const ChatWindow = (props) => {
  const msgTextRef = useRef(null);
  return (
    <>
      <div className="flex flex-col w-full overflow-y-scroll h-90 ">
        {props.messages.length > 0 ? (
          props.messages.map((message, i) => (
            <Message
              key={Math.random() + i}
              text={message.text}
              activeUser={props.activeUser}
              userId={message.user}
            />
          ))
        ) : (
          <div className="w-8/12 m-auto postImg">
            <LoadingSpinner />
          </div>
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
