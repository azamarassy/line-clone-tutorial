import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCs-B1zSoQhu9W1khMtlpgg7nhqZbnp_V0",
  authDomain: "line-clone-tutorial-20ae2.firebaseapp.com",
  projectId: "line-clone-tutorial-20ae2",
  storageBucket: "line-clone-tutorial-20ae2.appspot.com",
  messagingSenderId: "119547622399",
  appId: "1:119547622399:web:d6a3c97c42dc9d30f96dca"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();//ポップアップを表示


export { app, db, auth, provider };