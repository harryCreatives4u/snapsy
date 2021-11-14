import React, { useState } from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actionsTypes";

import Modal from "../../../Components/UI/Modal/Modal";

const CreatePost = (props) => {
  const [postDesc, setPostDesc] = useState(null);
  const [postImage, setPostImage] = useState(null);
  const [postImagePreview, setPostImagePreview] = useState(null);

  const submitPost = () => {
    props.createPost(postImage, postDesc, props.user.userId);
  };

  const closeModal = () => {
    props.togglePostModal();
    setPostDesc(null);
    setPostImage(null);
    setPostImagePreview(null);
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full h-screen bg-black opacity-50"></div>
      <div className="relative w-full">
        <Modal action={closeModal}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-center justify-around w-full h-full max-h-full lg:flex-row"
          >
            <label
              for="postImage"
              className={`flex items-center max-h-full  relative justify-center w-10/12 text-center text-gray-400 ${
                !postImage ? "border-4" : ""
              } border-gray-400 border-dashed rounded md:w-8/12 lg:w-6/12 postImg`}
            >
              {postImage ? (
                <>
                  <img
                    src={postImagePreview}
                    className="object-cover w-full h-full rounded"
                    alt="preview"
                  />
                  <p className="absolute text-black">click to change</p>
                </>
              ) : (
                <div className="my-auto">
                  <p className="text-8xl">+</p> <br />
                  Choose a picture
                </div>
              )}
            </label>
            <input
              type="file"
              className="hidden "
              accept="image/png, image/jpeg"
              id="postImage"
              placeholder="choose an image"
              onChange={(e) => {
                const file = e.target.files[0];
                const fileUrl = URL.createObjectURL(file);
                setPostImage(file);
                setPostImagePreview(fileUrl);
              }}
            />
            <div className="flex flex-col w-4/5 lg:w-1/4">
              <textarea
                className="w-full h-32 text-gray-600 bg-gray-200 rounded resize-none "
                placeholder="Type a decsription"
                value={postDesc}
                onChange={(e) => setPostDesc(e.target.value)}
              />
              <button
                disabled={postImage ? false : true}
                className={`p-2 mx-auto mt-2  border ${
                  postImage
                    ? "border-blue-500 text-blue-500"
                    : "border-gray-300 text-gray-300"
                } rounded-md w-fit-content `}
                onClick={() => {
                  submitPost();
                  closeModal();
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (image, postDesc, userId) =>
      dispatch(actions.createPost(image, postDesc, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
