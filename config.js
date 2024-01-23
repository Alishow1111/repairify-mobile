// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBAE0rXkV8FjQYvaSe56k0Nw-fvZB-2968",
  authDomain: "repairify-dc5b3.firebaseapp.com",
  projectId: "repairify-dc5b3",
  storageBucket: "repairify-dc5b3.appspot.com",
  messagingSenderId: "50317544884",
  appId: "1:50317544884:web:eb68eac95385e9abd176e1"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);