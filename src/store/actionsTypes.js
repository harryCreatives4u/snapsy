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

export const authUser = (userId, email, username) => {
  return (dispatch) => {
    const userData = {
      userId: userId,
      email: email,
      username: username,
      posts: [],
    };
    axios.get(`${databaseUrl}/users/${userId}.json`).then((res) => {
      if (res.data === null) {
        axios
          .put(`${databaseUrl}/users/${userId}.json`, userData)
          .then(() => dispatch(authSuccess(userId, email, username)));
      } else {
        dispatch(authSuccess(userId, email, username));
      }
    });
  };
};
