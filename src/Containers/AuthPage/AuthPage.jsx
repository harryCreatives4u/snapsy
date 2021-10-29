import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";

import logo from "../../Assets/Img/logo.png";

import * as actions from "../../store/actionsTypes";
import { apiClientId } from "../../firebase/firebaseConfig";
import { connect } from "react-redux";

const AuthPage = (props) => {
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
    // const db = getDatabase();
    // const userRef = ref(db, "User");
    // onValue(userRef, (snapshot) => {
    //   const data = snapshot.val();
    // });
  }, []);

  const loginHandler = (response) => {
    const userData = response.profileObj;
    props.startAuth(userData.googleId, userData.email, userData.name);
    // console.log(response.profileObj);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen authBG ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="grid items-center w-11/12 grid-cols-1 px-4 bg-white rounded shadow-lg md:grid-cols-2 2xl:w-6/12 h-3/6 md:h-4/6 "
      >
        <img src={logo} alt="logo" className="w-10/12 mx-auto " />
        {isNewUser ? (
          <div className="flex flex-col justify-start">
            <input
              placeholder="username "
              className="h-12 mb-4 text-center border-b border-gray-400 outline-none"
            />
            <button className="px-4 py-2 mx-auto mb-4 text-sm text-blue-600 border border-blue-400 rounded max-w-max">
              Confirm
            </button>
          </div>
        ) : (
          <div
            className="flex justify-center "
            onClick={() => console.log("loading")}
          >
            <GoogleLogin
              theme="dark"
              clientId={apiClientId}
              buttonText="Login With Google"
              onSuccess={loginHandler}
              onFailure={loginHandler}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapActionsToProps = (dispatch) => {
  return {
    startAuth: (userID, email, username) =>
      dispatch(actions.startAuth(userID, email, username)),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(AuthPage);
