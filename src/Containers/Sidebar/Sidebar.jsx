import React from "react";

import ProfileCard from "../../Components/UI/ProfileCard/ProfileCard";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4 text-center bg-white rounded shadow-md ">
      <h1 className="mb-6 text-xl font-medium uppercase">New Users</h1>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  );
};

export default Sidebar;
