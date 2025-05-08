// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyA5mvCqNDTfHOEi1AabLD7fg_gakqbTnoE",
  authDomain: "prepwise-5fd64.firebaseapp.com",
  projectId: "prepwise-5fd64",
  storageBucket: "prepwise-5fd64.firebasestorage.app",
  messagingSenderId: "606579930511",
  appId: "1:606579930511:web:60ef9760dfe2d81df647fa",
  measurementId: "G-1CR9BN3MHV"
};

// Initialize Firebase
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);