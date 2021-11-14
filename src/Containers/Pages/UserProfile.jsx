import React, { useEffect, useState } from "react";
import "../../firebase/firebase";
import { useParams } from "react-router";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { chatDb } from "../../firebase/firebase";
import { connect } from "react-redux";

import PostGrid from "../../Components/ProfilePageComponents/PostGrid";
import ProfileHeader from "../../Components/ProfilePageComponents/ProfileHeader";
import LoadingSpinner from "../../Components/UI/LoadingSpinner";

const UserProfile = (props) => {
  const [userPosts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  let { user = props.user.userId } = useParams();

  useEffect(() => {
    const userRef = doc(chatDb, "Users", user);

    getDoc(userRef).then((data) => {
      setUserData(data.data());
    });

    const userPostsRef = collection(chatDb, "All-Posts");
    const q = query(userPostsRef, where("userId", "==", `${user}`));

    getDocs(q).then((docs) => {
      const fetchedPosts = [];
      docs.forEach((doc) => {
        const post = {
          ...doc.data(),
          id: doc.id,
        };
        fetchedPosts.push(post);
      });
      setPosts(fetchedPosts);
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full p-4 mx-auto sm:w-4/5 sm:p-0 min-h-screen-8">
      {!loading ? (
        <>
          <div className="flex items-center justify-center py-4 pl-0 mx-auto border-b border-gray-300 h-60">
            {userData ? (
              <ProfileHeader userData={userData} />
            ) : (
              <div className="h-40">
                <LoadingSpinner />
              </div>
            )}
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4 xl:grid-cols-4 ">
            {userPosts.map((post) => (
              <PostGrid key={post.id} post={post} />
            ))}
          </div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(UserProfile);
