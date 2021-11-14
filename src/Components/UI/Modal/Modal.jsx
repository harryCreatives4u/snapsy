import React from "react";

import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="fixed flex items-center justify-center w-4/5 bg-white rounded shadow-lg Modal h-4/5">
      {props.children}
      <p
        onClick={props.action}
        className="absolute text-2xl font-bold text-gray-400 cursor-pointer top-4 right-4"
      >
        X
      </p>
    </div>
  );
};

export default Modal;
