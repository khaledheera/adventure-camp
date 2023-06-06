// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa8ahZtGENH-DgCAFuHtzQ_3RLO1Wi_DA",
  authDomain: "adventura-camp.firebaseapp.com",
  projectId: "adventura-camp",
  storageBucket: "adventura-camp.appspot.com",
  messagingSenderId: "367217182097",
  appId: "1:367217182097:web:ecdab50530db7d63520630"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;