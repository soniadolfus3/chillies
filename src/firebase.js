import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBudIbsExL5MCeLtMmDqWo1BXIfs1A-gtY",
  authDomain: "food-delivery-79f0f.firebaseapp.com",
  projectId: "food-delivery-79f0f",
  storageBucket: "food-delivery-79f0f.firebasestorage.app",
  messagingSenderId: "512851718724",
  appId: "1:512851718724:web:2bbbb10536a7a4392b0211",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
