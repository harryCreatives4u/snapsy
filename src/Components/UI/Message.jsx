import React, { useEffect, useRef } from "react";

const Message = (props) => {
  const msgRef = useRef(null);

  useEffect(() => {
    msgRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  let messageFormatting = "text-gray-200 bg-blue-500 rounded-bl-none";
  if (props.userId === props.activeUser) {
    messageFormatting = "text-gray-600 bg-gray-300  rounded-br-none self-end";
  }

  return (
    <div
      ref={msgRef}
      className={`p-3 py-2 m-2 mx-4 xl:mx-2  rounded-lg  w-fit-content ${messageFormatting}`}
    >
      {props.text}
    </div>
  );
};

export default Message;
