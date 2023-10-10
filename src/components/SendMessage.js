import React from 'react'
import { useState } from 'react';
import { db, auth } from "../firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function SendMessage() {
    const [message, setMessage] = useState("");
    function sendMessage(e){
     e.preventDefault();//enter押したときに再ロードされないように    
     
     const { uid, photoURL } = auth.currentUser;

     addDoc(collection(db, "messages"), {
        text: message,
        photoURL: photoURL,
        uid: uid,
        createdAt: serverTimestamp(),
      });
    }
  return (
    <div>
        <form onSubmit={sendMessage}>{/* onSubmit:enterを押したら関数が呼ばれる */}
            <div className="sendMsg">
                <input placeholder='メッセージ' type='text' onChange={(e) => setMessage(e.target.value)}/>

            </div>
        </form>
    </div>
  )
}


export default SendMessage;