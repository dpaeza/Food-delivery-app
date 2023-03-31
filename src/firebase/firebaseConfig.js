// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOtCEK0vVPYihCIvLclKn-cFniVDANA3U",
    authDomain: "food-delivery-app-68ee2.firebaseapp.com",
    projectId: "food-delivery-app-68ee2",
    storageBucket: "food-delivery-app-68ee2.appspot.com",
    messagingSenderId: "251890154593",
    appId: "1:251890154593:web:ea4263f720a0fcf81c7e20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export const dataBase = getFirestore(app)