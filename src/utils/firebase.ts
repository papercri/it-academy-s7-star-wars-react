
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCSwoYeE2hf3p2AOLrE-AlQepnYrymcT6M",
  authDomain: "login-react-firebase-5a392.firebaseapp.com",
  databaseURL: "https://login-react-firebase-5a392-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "login-react-firebase-5a392",
  storageBucket: "login-react-firebase-5a392.firebasestorage.app",
  messagingSenderId: "1011589322403",
  appId: "1:1011589322403:web:8d2b274ab28ad385621116"
};


const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;