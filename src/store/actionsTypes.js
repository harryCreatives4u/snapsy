import { getStorage, ref, uploadBytes } from "firebase/storage";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  orderBy,
  query,
  limitToLast,
  updateDoc,
  increment,
  where,
} from "firebase/firestore";
import { chatDb } from "../firebase/firebase";
import "../firebase/firebase";
import Compressor from "compressorjs";

const storage = getStorage();

export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";
export const SET_POSTS = "SET_POSTS";
export const SET_USERS = "SET_USERS";
export const STORE_TEMP_DETAILS = "STORE_TEMP_DETAILS";

const authSuccess = (userId, email, actualName, username, userDP) => {
  return {
    type: AUTH_SUCCESS,
    userId: userId,
    email: email,
    actualName: actualName,
    username: username,
    userDP: userDP,
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

const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts: posts,
  };
};

const setUsers = (users) => {
  return {
    type: "SET_USERS",
    users: users,
  };
};

const storeTempDetails = (userId, email, actualName) => {
  return {
    type: "STORE_TEMP_DETAILS",
    userId: userId,
    email: email,
    actualName: actualName,
    isNewUser: true,
  };
};

export const createUser = (userId, email, actualName, userDP, username) => {
  return (dispatch) => {
    const imageName =
      userId + Math.floor(Math.random() * 10000000) + userDP.name;
    const storageRef = ref(storage, `userDP/${imageName}`);

    const userData = {
      userId: userId,
      email: email,
      actualName: actualName,
      username: username,
      userDP: imageName,
      posts: 0,
      likes: 0,
    };

    dispatch(startLoading());

    new Compressor(userDP, {
      quality: 0.8,
      success: (compressedResult) => {
        uploadBytes(storageRef, compressedResult).then((snapshot) => {
          const userRef = doc(chatDb, `Users/${userId}`);
          setDoc(userRef, userData).then(() => {
            console.log("User created");
            dispatch(authSuccess(userId, email, actualName, username));
            dispatch(stopLoading());
          });
        });
      },
    });
  };
};

export const authUser = (userId, email, actualName) => {
  console.log("authUser");
  return (dispatch) => {
    dispatch(startLoading());

    const userRef = collection(chatDb, "Users");
    const q = query(userRef, where("userId", "==", `${userId}`));

    getDocs(q).then((docs) => {
      if (docs.size === 0) {
        dispatch(storeTempDetails(userId, email, actualName));
        dispatch(stopLoading());
      } else {
        const user = docs.docs[0].data();
        dispatch(
          authSuccess(userId, email, actualName, user.username, user.userDP)
        );
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
      imageName: imageName,
      description: postDesc,
      likes: 0,
      createdAt: new Date(),
      userId: userId,
    };

    new Compressor(image, {
      quality: 0.8,
      success: (compressedResult) => {
        uploadBytes(storageRef, compressedResult).then(() => {
          setDoc(firestoreDbRef, postData);

          const user = doc(chatDb, `Users/${userId}`);
          updateDoc(user, { posts: increment(1) });

          dispatch(stopLoading());
        });
      },
    });
  };
};

export const likePost = (userId, postId) => {
  return (dispatch) => {
    const user = doc(chatDb, `Users/${userId}`);
    console.log(userId);
    updateDoc(user, { likes: increment(1) });
    dispatch(stopLoading());

    const post = doc(chatDb, `All-Posts/${postId}`);
    updateDoc(post, { likes: increment(1) });
  };
};

export const getPosts = () => {
  return (dispatch) => {
    dispatch(startLoading());
    const q = query(
      collection(chatDb, `All-Posts`),
      orderBy("createdAt"),
      limitToLast(10)
    );
    getDocs(q).then((posts) => {
      const fetchedPosts = [];
      posts.forEach((post) => {
        fetchedPosts.push({
          id: post.id,
          ...post.data(),
        });
      });
      dispatch(setPosts(fetchedPosts));
      dispatch(stopLoading());
    });
  };
};

export const getUsers = () => {
  return (dispatch) => {
    const q = collection(chatDb, `Users`);
    getDocs(q).then((users) => {
      dispatch(stopLoading());
      const fetchedUsers = [];
      users.forEach((user) => {
        fetchedUsers.push({
          id: user.id,
          ...user.data(),
        });
      });
      dispatch(setUsers(fetchedUsers));
      dispatch(startLoading());
    });
  };
};
