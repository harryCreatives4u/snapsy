import React, { useState, useEffect } from "react";

import ChatList from "../../Components/MessengerComponents/ChatList";
import ChatWindow from "../../Components/MessengerComponents/ChatWindow";

import { chatDb } from "../../firebase/firebase";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  doc,
  Timestamp,
  setDoc,
} from "firebase/firestore";
import { connect } from "react-redux";

const Messenger = (props) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [messages, setMesages] = useState([]);
  const chatrooms = ["General", "Tech", "Gaming", "Art", "Poetry", "Political"];
  const [activeChatroom, setActiveChatroom] = useState(chatrooms[0]);

  const changeChatroomHandler = (chatroom) => {
    if (activeChatroom !== chatroom) {
      setMesages([]);
      setMenuOpened(false);
      setActiveChatroom(chatroom);
    }
  };

  useEffect(() => {
    const q = query(
      collection(chatDb, `${activeChatroom}-Chatroom`),
      orderBy("created-at"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const oldMsgs = [...messages];
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      data.forEach((msg) => {
        oldMsgs.push(msg);
      });
      setMesages(oldMsgs);
    });
    return unsubscribe;
  }, [activeChatroom]);

  const sendMessageHandler = (message) => {
    const firestoreDbRef = doc(
      collection(chatDb, `${activeChatroom}-Chatroom`)
    );
    const data = {
      text: message,
      "created-at": Timestamp.fromDate(new Date()),
      user: props.user.userId,
    };
    setDoc(firestoreDbRef, data);
  };

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className="relative flex w-full overflow-hidden border border-gray-300 rounded-md shadow-md h-screen-9">
      <ChatList
        chatrooms={chatrooms}
        toggleMenu={toggleMenu}
        opened={menuOpened}
        activeChatroom={activeChatroom}
        changeChatroom={changeChatroomHandler}
      />
      <div className="relative flex flex-col w-full md:w-9/12 ">
        <ChatWindow
          activeUser={props.user.userId}
          sendMessage={sendMessageHandler}
          messages={messages}
        />
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Messenger);
