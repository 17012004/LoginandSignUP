import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0aKsq7QTvEZYw6Ds1sn27Z2lVOb2C45k",
  authDomain: "loginsignup-f8933.firebaseapp.com",
  projectId: "loginsignup-f8933",
  storageBucket: "loginsignup-f8933.appspot.com",
  messagingSenderId: "711025749450",
  appId: "1:711025749450:web:cd8cac278b6de379283333",
  measurementId: "G-15EE85NEFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const datab = getFirestore(app);
