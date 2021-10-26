import "./App.css";
import { useEffect } from "react";
import { googleProvider } from "../../firebase/firebase";
import {
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
} from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

import Header from "../../Components/UI/Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import PostFeed from "../PostFeed/PostFeed";
const auth = getAuth();

function App() {
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
    <div className="flex flex-col items-center justify-center min-h-full debug-screens bg-bodyGrey ">
      <Header />
      <div className="container relative flex justify-between pt-20 mx-auto max-w-workspace lg:w-11/12 xl:w-4/5 2xl:w-10/12">
        <PostFeed />
        <div className="sticky left-0 items-center hidden w-2/6 bg-red-100 top-16 lg:flex h-post">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
