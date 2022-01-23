import { getDatabase, ref, onValue, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  FacebookAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import * as CloudStorage from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcAjioOzC0Tj_I-lfJmZ2Tj4z12oUZKqc",
  authDomain: "ionic-chat-app-7e7da.firebaseapp.com",
  projectId: "ionic-chat-app-7e7da",
  storageBucket: "ionic-chat-app-7e7da.appspot.com",
  messagingSenderId: "635195674525",
  appId: "1:635195674525:web:7180a7578254a0c788a974",
  measurementId: "G-7W38BW6SQG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const cloud = CloudStorage.getStorage();