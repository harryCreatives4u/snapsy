import React, { useState, useEffect } from "react";
import { storage } from "../../firebase/firebase";
import { ref, getDownloadURL } from "firebase/storage";

import LoadingSpinner from "../UI/LoadingSpinner";

const PostGrid = (props) => {
  const [postImage, setPostImage] = useState(null);

  useEffect(() => {
    const postImageRef = ref(storage, `posts/${props.post.imageName}`);
    getDownloadURL(postImageRef).then((res) => setPostImage(res));
  }, []);

  return (
    <>
      <div>
        <div className=" thumbnail">
          {postImage ? (
            <img src={postImage} className="object-cover h-full" alt="post" />
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    </>
  );
};

export default PostGrid;
