import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";

import logo from "../../Assets/Img/logo.png";

import * as actions from "../../store/actionsTypes";
import { apiClientId } from "../../firebase/firebaseConfig";
import { connect } from "react-redux";

const AuthPage = (props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // const db = getDatabase();
    // const userRef = ref(db, "User");
    // onValue(userRef, (snapshot) => {
    //   const data = snapshot.val();
    // });
  }, []);

  const loginHandler = (response) => {
    setLoading(true);
    const userData = response.profileObj;
    props.authUser(userData.googleId, userData.email, userData.name);
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
        <div className="text-center">
          {loading ? (
            <p>loading...</p>
          ) : (
            <GoogleLogin
              theme="dark"
              clientId={apiClientId}
              buttonText="Login With Google"
              onSuccess={loginHandler}
              onFailure={loginHandler}
              cookiePolicy={"single_host_origin"}
            />
          )}
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isNewUser: state.isNewUser,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    authUser: (userID, email, username) =>
      dispatch(actions.authUser(userID, email, username)),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(AuthPage);
