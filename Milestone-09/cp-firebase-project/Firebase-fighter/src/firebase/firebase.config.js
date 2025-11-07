// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9_vXDLmUXHKF1KdgmYASOH9DQVwxcngI",
  authDomain: "fir-fighter-ts.firebaseapp.com",
  projectId: "fir-fighter-ts",
  storageBucket: "fir-fighter-ts.firebasestorage.app",
  messagingSenderId: "29277302909",
  appId: "1:29277302909:web:4bb756551d502018e60114"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);