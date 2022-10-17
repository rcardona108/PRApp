import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

// Optionally import the services that you want to use
//import {...} from "firebase/auth"
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA4yCh_72a--k7u9tSWL7SRlTemHS9I9l8",
    authDomain: "personalrecordkeeper.firebaseapp.com",
    projectId: "personalrecordkeeper",
    storageBucket: "personalrecordkeeper.appspot.com",
    messagingSenderId: "181310588428",
    appId: "1:181310588428:web:7d0f4f8a843e1ba921d029",
    measurementId: "G-7MS8Z55KTR"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const authApp = getAuth(app);
export default authApp;
