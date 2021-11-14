import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import placeholderAva from "../../../Assets/Img/user-ava.png";

import { ref, getDownloadURL } from "@firebase/storage";
import { storage } from "../../../firebase/firebase";

const StoryUser = (props) => {
  const [userDP, setUserDP] = useState(null);

  useEffect(() => {
    const userDPPath = ref(storage, `userDP/${props.user.userDP}`);
    getDownloadURL(userDPPath)
      .then((url) => {
        setUserDP(url);
      })
      .catch(setUserDP(placeholderAva));
  }, []);

  return (
    <Link to={`/profile/${props.user.userId}`}>
      <img
        className="mx-auto rounded-full w-14 h-14"
        src={userDP}
        alt="user avatar"
      />
      <p className="text-sm text-center ">{props.user.username}</p>
    </Link>
  );
};

export default StoryUser;
