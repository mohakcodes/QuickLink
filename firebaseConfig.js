// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtIm3jkhqpcSTJxZFWU0bLzsAmlZcHs8Q",
  authDomain: "the-quicklink-app.firebaseapp.com",
  projectId: "the-quicklink-app",
  storageBucket: "the-quicklink-app.appspot.com",
  messagingSenderId: "466336485913",
  appId: "1:466336485913:web:68fbf9a8136de76b159088",
  measurementId: "G-5SZHTR314J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);