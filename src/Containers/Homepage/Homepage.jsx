import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import PostFeed from "../PostFeed/PostFeed";

const Homepage = () => {
  return (
    <>
      <PostFeed />
      <div className="sticky left-0 items-center hidden w-2/6 bg-red-100 top-16 lg:flex h-post">
        <Sidebar />
      </div>
    </>
  );
};

export default Homepage;
