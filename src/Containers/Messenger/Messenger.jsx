import React, { useState } from "react";

import ChatList from "../../Components/ChatList/ChatList";
import ChatWindow from "../../Components/ChatWindow/ChatWindow";

const Messenger = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const messages = [
    { text: "yo", sent: true },
    { text: "how are you?", sent: false },
    { text: "nothing much.... wbu", sent: false },
    { text: "ooooook", sent: true },
    { text: "ooooook", sent: false },
    { text: "ooooook", sent: false },
    { text: "ooooook", sent: true },
    { text: "ooooook", sent: false },
    { text: "ooooook", sent: false },
    { text: "ooooook", sent: false },
    { text: "ooooook", sent: true },
    { text: "ooooook", sent: true },
    { text: "ooooook", sent: true },
    { text: "ooooook", sent: false },
    { text: "ooooook", sent: false },
    { text: "ooooook", sent: false },
    { text: "ooooook", sent: false },
    { text: "ooooook", sent: false },
    { text: "ooooook", sent: false },
    { text: "ooooook", sent: false },
  ];

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className="relative flex w-full overflow-hidden border border-gray-300 rounded-md shadow-md h-screen-9">
      <ChatList toggleMenu={toggleMenu} opened={menuOpened} />
      <div className="relative flex flex-col w-full  md:w-9/12 ">
        <ChatWindow messages={messages} />
      </div>
      <button
        onClick={toggleMenu}
        className={`absolute px-2 py-1 text-white transform -rotate-90 bg-blue-800 rounded-lg top-2/4 sm:-left-8
           ${menuOpened ? "left-full" : "-left-9"}`}
      >
        Chatrooms
      </button>
    </div>
  );
};

export default Messenger;
