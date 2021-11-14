import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { storage, chatDb } from "../../firebase/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { doc, getDoc } from "@firebase/firestore";

import { faHeart, faDownload } from "@fortawesome/free-solid-svg-icons";
import placeholderAva from "../../Assets/Img/user-ava.png";
import UsernameLink from "../UI/UsernameLink";
import LoadingSpinner from "../UI/LoadingSpinner";

const Post = (props) => {
  const [img, setImg] = useState(null);
  const [liked, setLiked] = useState(false);
  const [userDP, setuserDP] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const userRef = doc(chatDb, `Users/${props.postData.userId}`);
    getDoc(userRef).then((user) => {
      setUsername(user.data().username);

      const userDPPath = ref(storage, `userDP/${user.data().userDP}`);
      getDownloadURL(userDPPath)
        .then((url) => {
          setuserDP(url);
        })
        .catch(setuserDP(placeholderAva));
    });

    const imagePath = ref(storage, `posts/${props.postData.imageName}`);
    getDownloadURL(imagePath).then((url) => {
      setImg(url);
    });
  }, []);

  const likePost = (userId, postId) => {
    setLiked(true);
    props.likePost(userId, postId);
  };

  return (
    <div className="max-w-full mb-4 bg-white border border-gray-200 rounded-sm w-post ">
      <div className="flex px-2 py-3 align-middle ">
        {userDP ? (
          <img src={userDP} className="w-8 h-8 mr-4 rounded-full " />
        ) : (
          <div className="w-8 h-8 mr-4 rounded-full">
            <LoadingSpinner />
          </div>
        )}
        <UsernameLink userId={props.postData.userId}>{username}</UsernameLink>
      </div>
      {img ? (
        <img
          src={img ? img : "loading"}
          className="object-cover border border-gray-200 postImg w-post "
        />
      ) : (
        <div className=" postImg w-post">
          <LoadingSpinner />
        </div>
      )}
      <div className="px-3 ">
        <div className="flex w-1/6 py-3 text-xl ">
          <a>
            <FontAwesomeIcon
              onClick={() =>
                !liked
                  ? likePost(props.postData.userId, props.postData.id)
                  : null
              }
              className={`mr-2 ${
                liked ? "text-red-600" : "text-black"
              } cursor-pointer`}
              icon={faHeart}
            />
          </a>
          <a href={img} download={props.postData.imageName} target="_blank">
            <FontAwesomeIcon icon={faDownload} className="cursor-pointer" />
          </a>
        </div>
        <div className="text-xs font-bold">
          {liked ? props.postData.likes + 1 : props.postData.likes} Likes
        </div>
        <div className="flex my-2">
          <p className="my-auto mr-2 username">
            <UsernameLink userId={props.postData.userId}>
              {username}
            </UsernameLink>
          </p>
          <div className="text-sm ">{props.postData.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
