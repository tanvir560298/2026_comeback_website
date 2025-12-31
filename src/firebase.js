import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "PASTE HERE",
  authDomain: "PASTE HERE",
  projectId: "PASTE HERE",
  storageBucket: "PASTE HERE",
  messagingSenderId: "PASTE HERE",
  appId: "PASTE HERE",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
