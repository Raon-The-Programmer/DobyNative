// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_API_KEY,
  authDomain: "dobyauth.firebaseapp.com",
  projectId: "dobyauth",
  storageBucket: "dobyauth.appspot.com",
  messagingSenderId: "184715546832",
  appId: "1:184715546832:web:751495a5014713a7c74ed5",
  measurementId: "G-GNHJ5VVDF7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
