// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvgYdyBWkcHW7I4yignJc0yiodr0q1j24",
  authDomain: "apexcodereviewusingai.firebaseapp.com",
  projectId: "apexcodereviewusingai",
  storageBucket: "apexcodereviewusingai.appspot.com",
  messagingSenderId: "834110649610",
  appId: "1:834110649610:web:3fb58f744acea3ef8b36f3",
  measurementId: "G-F89VTF4E3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Export everything you need
export {
  auth,
  provider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
};
