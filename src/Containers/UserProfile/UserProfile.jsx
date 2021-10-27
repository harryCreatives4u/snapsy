import React from "react";

import PostGrid from "../../Components/PostGrid/PostGrid";
import ProfileHeader from "../../Components/ProfileHeader/ProfileHeader";

const UserProfile = () => {
  // remove this/////
  const posts = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  // ////////////////

  return (
    <div className="w-full p-4 mx-auto sm:w-4/5 sm:p-0 min-h-screen-8">
      <div className="flex items-center justify-center py-4 pl-0 mx-auto border-b border-gray-300 h-60">
        <ProfileHeader />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4 xl:grid-cols-4 ">
        <PostGrid posts={posts} />
      </div>
    </div>
  );
};

export default UserProfile;
