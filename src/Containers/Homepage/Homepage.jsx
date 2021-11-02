import React, { useState } from "react";
import { connect } from "react-redux";

import Sidebar from "../../Components/Sidebar/Sidebar";
import PostFeed from "../PostFeed/PostFeed";
import CreatePost from "../CreatePost/CreatePost";
import * as actions from "../../store/actionsTypes";

const Homepage = (props) => {
  const [creatingPost, setCreatingPost] = useState(false);
  const [postDesc, setPostDesc] = useState(null);
  const [postImage, setPostImage] = useState(null);
  const [postImagePreview, setPostImagePreview] = useState(null);

  const submitPostHandler = () => {
    props.createPost(postImage, postDesc, props.user.userId);
  };

  const postCleanup = () => {
    setCreatingPost(false);
    setPostDesc(null);
    setPostImage(null);
    setPostImagePreview(null);
  };

  return (
    <>
      <PostFeed />
      <div className="sticky left-0 z-40 items-center hidden w-2/6 bg-red-100 top-16 lg:flex h-post">
        <Sidebar togglePostModal={() => setCreatingPost(!creatingPost)} />
      </div>
      {creatingPost ? (
        <div>
          <CreatePost
            desc={postDesc}
            image={postImage}
            changeDesc={setPostDesc}
            changeImage={setPostImage}
            preview={postImagePreview}
            setPreview={setPostImagePreview}
            submitPost={submitPostHandler}
            togglePostModal={() => postCleanup()}
          />
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (image, postDesc, userId) =>
      dispatch(actions.createPost(image, postDesc, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
