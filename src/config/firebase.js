import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwY2DAva3e8XjqS0zu3_okBp_wS6WtPYA",
  authDomain: "fir-implemantation.firebaseapp.com",
  projectId: "fir-implemantation",
  storageBucket: "fir-implemantation.firebasestorage.app",
  messagingSenderId: "1035531275751",
  appId: "1:1035531275751:web:93d560265ef54a3f444142",
  measurementId: "G-TNJVG75S60",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
