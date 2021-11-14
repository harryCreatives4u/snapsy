// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { firebaseConfig } from "./firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider();
export const database = getDatabase();
export const chatDb = getFirestore();
export const storage = getStorage();

export default firebaseApp;
