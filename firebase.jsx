import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDzvkQM1QfGKXiWN026lMv7FwADVzs_0DY",
  authDomain: "notes-8677d.firebaseapp.com",
  projectId: "notes-8677d",
  storageBucket: "notes-8677d.appspot.com",
  messagingSenderId: "935048007842",
  appId: "1:935048007842:web:a90dbf0e3e60896ef987fb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
