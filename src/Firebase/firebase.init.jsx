// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnmGUsX_SdnH8E66NCoL5MQn6dAQ1SCks",
  authDomain: "shopping-mart-70ded.firebaseapp.com",
  projectId: "shopping-mart-70ded",
  storageBucket: "shopping-mart-70ded.appspot.com",
  messagingSenderId: "71011891048",
  appId: "1:71011891048:web:8e5082dc3a9e8b9fa5c8dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
export default app;
