import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Sidebar from "../../Components/HompageComponents/Sidebar";
import PostFeed from "./AssistiveContainers/PostFeed";
import CreatePost from "./AssistiveContainers/CreatePost";

import * as actions from "../../store/actionsTypes";

const Homepage = (props) => {
  const [creatingPost, setCreatingPost] = useState(false);

  useEffect(() => {
    props.getUsers();
    props.getPosts();
  }, []);

  const submitPostHandler = (postImage, postDesc) => {
    props.createPost(
      postImage,
      postDesc,
      props.user.userId,
      props.user.username,
      props.user.userDP
    );
  };

  return (
    <>
      <PostFeed className="mx-auto" users={props.users} posts={props.posts} />

      <div className="sticky left-0 z-40 items-center hidden w-2/6 bg-red-100 lg:flex top-16 h-post">
        <Sidebar togglePostModal={() => setCreatingPost(!creatingPost)} />
      </div>

      <button
        className="fixed block p-2 text-white bg-blue-700 rounded-lg rounded-br-none bottom-4 right-4 lg:hidden"
        onClick={() => setCreatingPost(!creatingPost)}
      >
        Create Post
      </button>

      {creatingPost ? (
        <div>
          <CreatePost
            submitPost={submitPostHandler}
            togglePostModal={() => setCreatingPost(false)}
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
    posts: state.posts,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (image, postDesc, userId, username) =>
      dispatch(actions.createPost(image, postDesc, userId, username)),
    getPosts: () => dispatch(actions.getPosts()),
    getUsers: () => dispatch(actions.getUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
