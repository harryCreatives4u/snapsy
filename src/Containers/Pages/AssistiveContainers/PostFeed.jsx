import React from "react";
import { connect } from "react-redux";

import Post from "../../../Components/HompageComponents/Post";
import StoryHeader from "../../../Components/HompageComponents/StoryHeader/StoryHeader";
import LoadingSpinner from "../../../Components/UI/LoadingSpinner";

import * as actions from "../../../store/actionsTypes";

const PostFeed = (props) => {
  return (
    <div className="flex flex-col max-w-full min-h-screen mx-auto align-middle w-post ">
      {props.users ? <StoryHeader users={props.users} /> : <LoadingSpinner />}
      {props.posts.map((post) => {
        return (
          <Post
            key={post.id}
            likePost={(userId, postId) => props.likePost(userId, postId)}
            postData={post}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    user: state.user,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    likePost: (userId, postId) => dispatch(actions.likePost(userId, postId)),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(PostFeed);
