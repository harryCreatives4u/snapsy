import React from "react";
import { googleProvider } from "../../firebase/firebase";
import {
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
} from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

import Sidebar from "../Sidebar/Sidebar";
import PostFeed from "../PostFeed/PostFeed";

const auth = getAuth();

const Homepage = () => {
  // useEffect(() => {
  //   console.log(bruh);
  //   getRedirectResult(auth)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access Google APIs.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       const user = result.user;
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       const email = error.email;
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //     });

  //   const db = getDatabase();
  //   const userRef = ref(db, "User");
  //   onValue(userRef, (snapshot) => {
  //     const data = snapshot.val();
  //   });
  // }, []);

  // const loginHandler = () => {
  //   setBruh("no");
  //   signInWithRedirect(auth, googleProvider);
  // };

  return (
    <>
      <PostFeed />
      <div className="sticky left-0 items-center hidden w-2/6 bg-red-100 top-16 lg:flex h-post">
        <Sidebar />
      </div>
    </>
  );
};

export default Homepage;
