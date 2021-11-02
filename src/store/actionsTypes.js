import axios from "axios";
import { databaseUrl } from "../firebase/firebaseConfig";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import firebaseApp, { chatDb } from "../firebase/firebase";
import "../firebase/firebase";
import Compressor from "compressorjs";

const storage = getStorage();

export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";

const authSuccess = (userId, email, username) => {
  return {
    type: AUTH_SUCCESS,
    userId: userId,
    email: email,
    username: username,
  };
};

const startLoading = () => {
  return {
    type: START_LOADING,
  };
};

const stopLoading = () => {
  return {
    type: STOP_LOADING,
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

    axios
      .get(`${databaseUrl}/users.json?orderBy="userId"&equalTo="${userId}"`)
      .then((res) => {
        if (Object.keys(res.data).length === 0) {
          axios.post(`${databaseUrl}/users.json`, userData);
          dispatch(authSuccess(userId, email, username));
          dispatch(stopLoading());
        } else {
          dispatch(authSuccess(userId, email, username));
          dispatch(stopLoading());
        }
      });
  };
};

export const createPost = (image, postDesc, userId) => {
  return (dispatch) => {
    dispatch(startLoading());

    const imageName =
      userId + Math.floor(Math.random() * 10000000) + image.name;

    const firestoreDbRef = doc(collection(chatDb, `All-Posts`));
    const storageRef = ref(storage, `posts/${imageName}`);

    const postData = {
      "image-name": imageName,
      description: postDesc,
      user: userId,
      likes: 0,
    };

    new Compressor(image, {
      quality: 0.8,
      success: (compressedResult) => {
        uploadBytes(storageRef, compressedResult).then((snapshot) => {
          setDoc(firestoreDbRef, postData);
          dispatch(stopLoading());
          console.log("made a post");
        });
      },
    });
  };
};
