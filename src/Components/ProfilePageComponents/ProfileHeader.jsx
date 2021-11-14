import React, { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase";

import placeholderAva from "../../Assets/Img/user-ava.png";

const ProfileHeader = (props) => {
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    const imageRef = ref(storage, `userDP/${props.userData.userDP}`);
    getDownloadURL(imageRef)
      .then((url) => {
        setUserImage(url);
      })
      .catch(() => {
        setUserImage(placeholderAva);
      });
  }, []);

  return (
    <>
      <img
        src={userImage}
        alt="user DP"
        className="object-cover w-40 h-40 mr-8 rounded-full"
      />
      <div>
        <p className="text-xl username">{props.userData.username}</p>
        <div className="flex ">
          <p className="mr-2">{props.userData.likes} Likes</p>
          <p className="">{props.userData.posts} Posts</p>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
