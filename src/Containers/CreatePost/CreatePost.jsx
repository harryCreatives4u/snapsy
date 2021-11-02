import React from "react";

import Modal from "../../Components/UI/Modal/Modal";

const CreatePost = (props) => {
  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full h-screen bg-black opacity-50"></div>
      <div className="relative w-full">
        <Modal>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-center justify-around w-full h-full lg:flex-row"
          >
            <label
              for="postImage"
              className={`flex items-center relative justify-center w-10/12 text-center text-gray-400 ${
                !props.image ? "border-4" : ""
              } border-gray-400 border-dashed rounded lg:w-6/12 postImg`}
            >
              {props.image ? (
                <>
                  <img
                    src={props.preview}
                    className="object-cover w-full h-full rounded"
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
                props.changeImage(file);
                props.setPreview(fileUrl);
                console.log("done");
              }}
            />
            <div className="flex flex-col w-4/5 lg:w-1/4">
              <textarea
                className="w-full h-32 text-gray-600 bg-gray-200 rounded resize-none "
                placeholder="Type a decsription"
                value={props.desc}
                onChange={(e) => props.changeDesc(e.target.value)}
              />
              <button
                disabled={props.image ? false : true}
                className={`p-2 mx-auto mt-2  border ${
                  props.image
                    ? "border-blue-500 text-blue-500"
                    : "border-gray-300 text-gray-300"
                } rounded-md w-fit-content `}
                onClick={props.submitPost}
              >
                Submit
              </button>
            </div>
          </form>
          <p
            onClick={props.togglePostModal}
            className="absolute text-2xl font-bold text-gray-400 cursor-pointer top-4 right-4"
          >
            X
          </p>
        </Modal>
      </div>
    </>
  );
};

export default CreatePost;
