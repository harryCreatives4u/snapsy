import "./App.css";
import { useState, useEffect } from "react";
import { googleProvider } from "./firebase/firebase";
import {
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
} from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

const auth = getAuth();

function App() {
  const [bruh, setBruh] = useState("yes");

  useEffect(() => {
    console.log(bruh);
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });

    const db = getDatabase();
    const userRef = ref(db, "User");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
    });
  }, []);

  const loginHandler = () => {
    setBruh("no");
    signInWithRedirect(auth, googleProvider);
  };

  return (
    <div className="justify-center w-full h-screen text-center align-middle ">
      <button onClick={loginHandler}>Sign In</button>
    </div>
  );
}

export default App;
