// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwmrKa07m4dVa6kv7faWsXEEkqaTqfpWk",
  authDomain: "inventory-managment-e3944.firebaseapp.com",
  projectId: "inventory-managment-e3944",
  storageBucket: "inventory-managment-e3944.appspot.com",
  messagingSenderId: "331844207183",
  appId: "1:331844207183:web:21822e3a74f9d50f19603a",
  measurementId: "G-RDJ5Z24TV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}