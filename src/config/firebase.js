// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlGQ6tO3T10MwY7HkaEELZbDEtJxZ5Xvc",
  authDomain: "food-app-c2c03.firebaseapp.com",
  projectId: "food-app-c2c03",
  storageBucket: "food-app-c2c03.appspot.com",
  messagingSenderId: "244423708745",
  appId: "1:244423708745:web:62a7160ad06b909687ef98",
  measurementId: "G-ZBPV1RT89H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
