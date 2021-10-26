import React from "react";

const Buttons = (props) => {
  return (
    <button className="grid my-auto text-sm text-blue-600 justify-self-end ">
      {props.text}
    </button>
  );
};

export default Buttons;
