// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjQgF2K2nXIRcJ_BkYb7Ar3gpuqtjx9Qg",
  authDomain: "shoppinglist-72e21.firebaseapp.com",
  projectId: "shoppinglist-72e21",
  storageBucket: "shoppinglist-72e21.appspot.com",
  messagingSenderId: "594273228897",
  appId: "1:594273228897:web:62f6ea9c0f01a5f6a87220"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db  = getFirestore(app)
