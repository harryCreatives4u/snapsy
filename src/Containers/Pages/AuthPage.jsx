import React, { useState, useRef, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { connect } from "react-redux";

import logo from "../../Assets/Img/logo.png";
import LoadingSpinner from "../../Components/UI/LoadingSpinner";

import * as actions from "../../store/actionsTypes";
import { apiClientId } from "../../firebase/firebaseConfig";


const AuthPage = (props) => {
  const [username, setUsername] = useState("");
  const [userDP, setUserDP] = useState(null);

  const errRef = useRef(null);

  const setUserDpHandler = (file) => {
    setUserDP(file);
  };

  const setUsernameHandler = (text) => {
    if (text.length < 20) {
      const format = /[!@#$%^&*()_+\-=\[\]\ \{};':"\\|,.<>\/?]+/;
      if (!format.test(text)) {
        setUsername(text);
      }
      if (format.test(text)) {
        errRef.current.innerText = "Use A-Z, a-z and alpha-numeric values only";
      }
    } else {
      errRef.current.innerText = "Username can only be 20 characters in length";
    }
  };

  const createUserHandler = () => {
    const storedDetails = props.tempDetails;
    props.createUser(
      storedDetails.userId,
      storedDetails.email,
      storedDetails.actualName,
      userDP,
      username
    );
  };

  const loginHandler = (response) => {
    const userData = response.profileObj;
    props.authUser(userData.googleId, userData.email, userData.name);
  };

  const loginFailedHandler = (response) => {
    errRef.current.innerText = "Something went wrong!";
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen authBG ">
      <p
        ref={errRef}
        className="w-11/12 font-bold text-center text-red-600 bg-white 2xl:w-6/12"
      ></p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="grid items-center w-11/12 grid-cols-1 px-4 bg-white rounded shadow-lg md:grid-cols-2 2xl:w-6/12 h-3/6 md:h-4/6 "
      >
        <img src={logo} alt="logo" className="object-cover w-10/12 mx-auto " />
        <div className="text-center">
          {props.loading ? (
            <LoadingSpinner />
          ) : props.isNewUser ? (
            <div className="flex flex-col items-center justify-center p-2 m-4 ">
              <div className="flex items-center">
                <label className="mb-4 text-6xl text-gray-400" for="userDP">
                  {userDP ? (
                    <img
                      src={URL.createObjectURL(userDP)}
                      className="w-8 h-8 mx-auto mb-4 rounded-full "
                    />
                  ) : (
                    <p>+</p>
                  )}
                  <p className="flex items-center h-full text-base text-black">
                    {userDP ? "Click to change" : "Choose a Display Picture"}
                  </p>
                </label>
              </div>
              <input
                onChange={(e) => setUsernameHandler(e.target.value)}
                type="text"
                required
                placeholder="Choose an Username"
                value={username}
                className="text-center text-gray-600 bg-gray-200 rounded"
              />

              <input
                id="userDP"
                type="file"
                onChange={(e) => setUserDpHandler(e.target.files[0])}
                className="hidden "
              />
              <button
                onClick={createUserHandler}
                className={
                  "p-2 mx-auto mt-2  border border-blue-500 text-blue-500 rounded-md w-fit-content "
                }
              >
                Confirm
              </button>
            </div>
          ) : (
            <GoogleLogin
              theme="dark"
              clientId={apiClientId}
              buttonText="Login With Google"
              onSuccess={loginHandler}
              onFailure={loginFailedHandler}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          )}
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    isNewUser: state.isNewUser,
    tempDetails: state.tempDetails,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    authUser: (userID, email, actualName) =>
      dispatch(actions.authUser(userID, email, actualName)),
    createUser: (userID, email, actualName, userDP, username) =>
      dispatch(actions.createUser(userID, email, actualName, userDP, username)),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(AuthPage);
