import React from "react";

import image from "../../Assets/Img/demo.jpg";

const PostGrid = (props) => {
  return (
    <>
      {props.posts.map((post) => (
        <a href="#">
          <div className=" thumbnail">
            <img src={image} alt="user DP" className="object-cover h-full" />
          </div>
        </a>
      ))}
    </>
  );
};

export default PostGrid;
