import React from 'react'
import { useState } from 'react';
import { db, auth } from "../firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Button, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

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
      setMessage("");
    }
  return (
    <div>
        <form onSubmit={sendMessage}>{/* onSubmit:enterを押したら関数が呼ばれる */}
            <div className="sendMsg">
                <Input placeholder='メッセージ' 
                  style={{
                    width: "78%",
                    fontSize: "15px",
                    fontWeight: "550",
                    marginLeft: "5px",
                    marginBottom: "-3px",
                  }}
                type='text' 
                onChange={(e) => setMessage(e.target.value)}
                value={message}/>
               <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />

            </div>
        </form>
    </div>
  )
}


export default SendMessage;