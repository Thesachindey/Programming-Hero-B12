// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAszqBj942b07Ae3JvhYyJKK9x8HXLj44c",
    authDomain: "dragon-news-ts.firebaseapp.com",
    projectId: "dragon-news-ts",
    storageBucket: "dragon-news-ts.firebasestorage.app",
    messagingSenderId: "671178086827",
    appId: "1:671178086827:web:2534c4075002d99c08daee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;