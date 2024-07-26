// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDLDTvaNLyZaK0Nm7uiEbzOCn2IzfntW8",
  authDomain: "fir-1st-76bb1.firebaseapp.com",
  projectId: "fir-1st-76bb1",
  storageBucket: "fir-1st-76bb1.appspot.com",
  messagingSenderId: "1062041278668",
  appId: "1:1062041278668:web:99f3dab3dd3b2ac7e44a69",
  measurementId: "G-M68DD0HGE2",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
