import React from "react";

import ChatList from "../../Components/ChatList/ChatList";
import ChatWindow from "../../Components/ChatWindow/ChatWindow";

const Messenger = () => {
  const messages = [
    { text: "yo", sent: true },
    { text: "how are you?", sent: false },
    { text: "nothing much.... wbu", sent: false },
    { text: "ooooook", sent: true },
    { text: "ooooook", sent: false },
    { text: "ooooook", sent: false },
    { text: "ooooook", sent: true },
    { text: "ooooook", sent: false },
    { text: "ooooook", sent: true },
    { text: "ooooook", sent: false },
  ];

  return (
    <div className="flex w-full h-screen border border-gray-300 rounded-md shadow-md md:h-screen-8">
      <ChatList />
      <div className="relative flex flex-col w-9/12 ">
        <ChatWindow messages={messages} />
      </div>
    </div>
  );
};

export default Messenger;
