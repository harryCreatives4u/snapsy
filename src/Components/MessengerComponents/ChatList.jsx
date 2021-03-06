import React from "react";

import image from "../../Assets/Img/demo.jpg";
import Buttons from "../UI/Buttons";

const ChatList = (props) => {
  return (
    <div
      className={`absolute z-50 transition-all top-0 w-full  md:w-3/12 h-full px-4 py-8  overflow-y-auto bg-white border-r-2 border-gray-300 ${
        props.opened ? "left-0" : "-left-full"
      }  md:static `}
    >
      <button
        onClick={() => {
          props.toggleMenu();
          console.log("yo");
        }}
        className="absolute text-2xl font-black text-gray-400 top-4 right-4 md:hidden"
      >
        X
      </button>
      <h1 className="mb-6 text-xl font-medium uppercase">Chatrooms</h1>
      {props.chatrooms.map((chatroom) => (
        <div
          key={chatroom}
          className={`flex items-center justify-between p-4 mb-4 ${
            chatroom === props.activeChatroom ? "bg-gray-400" : "bg-gray-200"
          }  rounded-xl h-14 `}
        >
          <div className="flex items-center">
            <img
              src={image}
              alt="chatroom_thumb"
              className="object-cover w-10 h-10 mr-2 rounded-full"
            />
            <p className="text-sm font-light">{chatroom}</p>
          </div>
          <div onClick={() => props.changeChatroom(chatroom)}>
            <Buttons text="open" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
