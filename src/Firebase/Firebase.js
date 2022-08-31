// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_aZKRHW7DgafPnpKezuCein0KN4L9EBQ",
  authDomain: "formtaskweek.firebaseapp.com",
  projectId: "formtaskweek",
  storageBucket: "formtaskweek.appspot.com",
  messagingSenderId: "551626961161",
  appId: "1:551626961161:web:d13800779ea67cae6523d8",
  measurementId: "G-XFFVYN8BW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);