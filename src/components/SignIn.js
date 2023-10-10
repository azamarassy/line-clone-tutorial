import React from 'react'
import Button from '@mui/material/Button';
// import firebase from "firebase/compat/app";
import { auth, provider } from "../firebase.js"
import { signInWithPopup } from "firebase/auth";

function SignIn() { 
    //firebaseを使ってグーグルでログインする
    function signInWithGoogle(){
    //   const provider = new firebase.auth.GoogleAuthProvider
      signInWithPopup(auth, provider);
    }
  return (
    <Button onClick={signInWithGoogle}>
        <p>グーグルでサインイン</p>
    </Button>
  )
}

export default SignIn