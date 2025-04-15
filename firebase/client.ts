// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJvxzdj0Pqk8OTDmueULXZrOb_Rm8wxX8",
  authDomain: "mockmate-8bf59.firebaseapp.com",
  projectId: "mockmate-8bf59",
  storageBucket: "mockmate-8bf59.firebasestorage.app",
  messagingSenderId: "869996236501",
  appId: "1:869996236501:web:a289b62d175d215368dc5c",
  measurementId: "G-PKV91ZRBP8",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
