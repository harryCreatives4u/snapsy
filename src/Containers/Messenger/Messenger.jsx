import React from "react";

import ChatList from "../../Components/ChatList/ChatList";
import Message from "../../Components/UI/Message/Message";
import Buttons from "../../Components/UI/Buttons/Buttons";

const Messenger = () => {
  return (
    <div className="flex w-full h-screen border border-gray-300 rounded-md shadow-md md:h-screen-8">
      <ChatList />
      <div className="relative flex flex-col w-9/12 ">
        <div className="flex flex-col w-full overflow-y-scroll h-90 ">
          <Message />
          <Message sent={true} />
          <Message />
          <Message />
          <Message sent={true} />
          <Message />
          <Message />
          <Message sent={true} />
          <Message />
          <Message sent={true} />
          <Message />
          <Message />
          <Message sent={true} />
          <Message />
          <Message />
          <Message sent={true} />
          <Message />
          <Message sent={true} />
          <Message />
          <Message />
          <Message sent={true} />
          <Message />
          <Message />
          <Message sent={true} />
          <Message />
          <Message sent={true} />
          <Message />
          <Message />
          <Message sent={true} />
          <Message />
          <Message />
          <Message sent={true} />
          <Message />
          <Message sent={true} />
          <Message />
          <Message />
          <Message sent={true} />
          <Message />
          <Message />
          <Message sent={true} />
          <Message />
          <Message sent={true} />
          <Message />
          <Message />
          <Message sent={true} />
          <Message />
          <Message />
          <Message sent={true} />
        </div>
        <input
          placeholder="Type a message"
          className="absolute right-0 z-30 w-full h-12 px-4 border border-gray-500 rounded-full bottom-4 "
        />
        <button
          text="Send"
          className="absolute z-40 text-sm text-blue-600 bottom-7 right-4 "
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Messenger;
