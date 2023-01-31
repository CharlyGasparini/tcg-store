import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUZN8JumX_RQkqr4jrrivMKlhA9X7Od28",
  authDomain: "backend---pokemon-center.firebaseapp.com",
  projectId: "backend---pokemon-center",
  storageBucket: "backend---pokemon-center.appspot.com",
  messagingSenderId: "377545731678",
  appId: "1:377545731678:web:80e60873fa5456661b0ecf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
