import axios from "axios";
import { databaseUrl } from "../firebase/firebaseConfig";

export const AUTH_SUCCESS = "AUTH_SUCCESS";

const authSuccess = (userId, email, username) => {
  return {
    type: AUTH_SUCCESS,
    userId: userId,
    email: email,
    username: username,
  };
};

export const startAuth = (userId, email, username) => {
  console.log("auth started with" + userId, email, username);
  return (dispatch) => {
    const userData = {
      email: email,
      username: username,
      posts: [],
    };
    axios
      .put(`${databaseUrl}/users/${userId}.json`, userData)
      .then(() => dispatch(authSuccess(userId, email, username)));
  };
};
