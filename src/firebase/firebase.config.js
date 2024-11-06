// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWyOnMJsWvX6n93WDEJW4Vxlh0mci6pt4",
  authDomain: "industrial-37fc4.firebaseapp.com",
  projectId: "industrial-37fc4",
  storageBucket: "industrial-37fc4.firebasestorage.app",
  messagingSenderId: "120401676614",
  appId: "1:120401676614:web:a488bd829d4a671f923d47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)