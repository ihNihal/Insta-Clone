// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ-yK-j-rU7-3aScH0GhhguC1F9PBts_Y",
  authDomain: "insta-clone-1666b.firebaseapp.com",
  projectId: "insta-clone-1666b",
  storageBucket: "insta-clone-1666b.appspot.com",
  messagingSenderId: "1062331792479",
  appId: "1:1062331792479:web:1f5d8f9382498ac6b52fea",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
