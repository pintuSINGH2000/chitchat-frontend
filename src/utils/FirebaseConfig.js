import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "chit-chat-56345.firebaseapp.com",
    projectId: "chit-chat-56345",
    storageBucket: "chit-chat-56345.appspot.com",
    messagingSenderId: "291939570551",
    appId: "1:291939570551:web:17525680a2fa7ff41ec772",
    measurementId: "G-GBTP956HCH"
  };

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);