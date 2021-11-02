import React from "react";

import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="fixed flex items-center justify-center w-4/5 bg-white rounded shadow-lg Modal h-4/5">
      {props.children}
    </div>
  );
};

export default Modal;
