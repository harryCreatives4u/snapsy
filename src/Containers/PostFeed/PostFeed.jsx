import React from "react";

import Post from "../../Components/Post/Post";
import StoryHeader from "../../Components/StoryHeader/StoryHeader";

const PostFeed = () => {
  return (
    <div className="flex flex-col max-w-full min-h-screen align-middle w-post md:mx-auto ">
      <StoryHeader />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostFeed;
