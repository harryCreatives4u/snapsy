import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDownload } from "@fortawesome/free-solid-svg-icons";

import demoImg from "../../Assets/Img/demo.jpg";

const Post = () => {
  return (
    <div className="max-w-full mb-4 bg-white border border-gray-200 rounded-sm w-post ">
      <div className="flex px-2 py-3 align-middle ">
        <img src={demoImg} className="w-8 h-8 mr-4 rounded-full " />
        <a href="#" className="my-auto username">
          hello
        </a>
      </div>
      <img
        src={demoImg}
        className="object-cover border border-gray-200 postImg w-post "
      />
      <div className="px-3 ">
        <div className="flex w-1/6 py-3 text-xl ">
          <FontAwesomeIcon className="mr-2 cursor-pointer" icon={faHeart} />
          <FontAwesomeIcon icon={faDownload} className="cursor-pointer" />
        </div>
        <div className="text-xs font-bold">4 Likes</div>
        <div className="flex my-2">
          <a href="#" className="my-auto mr-2 username">
            hello
          </a>
          <div className="text-sm ">Post Description</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
