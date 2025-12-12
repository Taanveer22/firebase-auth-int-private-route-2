// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArcS7K3kvPjQHp11SBhwwUu7qxZFnBlzE",
  authDomain: "private-route-69743.firebaseapp.com",
  projectId: "private-route-69743",
  storageBucket: "private-route-69743.firebasestorage.app",
  messagingSenderId: "757383940264",
  appId: "1:757383940264:web:a5fb3859f547d08ba11a9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
