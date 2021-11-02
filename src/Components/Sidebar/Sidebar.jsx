import React from "react";

import ProfileCard from "../UI/ProfileCard/ProfileCard";
import Modal from "../UI/Modal/Modal";

const Sidebar = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4 text-center bg-white rounded shadow-md ">
      <h1 className="mb-6 text-xl font-medium uppercase">New Users</h1>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <button
        onClick={props.togglePostModal}
        className="p-2 text-blue-500 border border-blue-500 rounded-md "
      >
        Create a Post
      </button>
    </div>
  );
};

export default Sidebar;
