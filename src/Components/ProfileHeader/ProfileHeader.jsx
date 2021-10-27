import React from "react";

import image from "../../Assets/Img/demo.jpg";

const ProfileHeader = () => {
  return (
    <>
      <img
        src={image}
        alt="user DP"
        className="object-cover w-40 h-40 mr-8 rounded-full"
      />
      <div>
        <p className="text-xl username">username</p>
        <div className="flex ">
          <p className="mr-2">3 likes</p>
          <p className="">5 posts</p>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
