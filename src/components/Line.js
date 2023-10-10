import React from 'react'
import SignOut from "./SignOut";
import SendMessage from './SendMessage';
import { db } from "../firebase.js";
import { useState, useEffect} from "react";
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";

function Line() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    // collection(db, "messages")//messagesコレクション内からデータを持ってくる。
    //   orderBy("createdAt")//createdAtが小さい順に並べる。
    //   limit(50)//
    //   onSnapshot((snapshot) => {
    //     //snapshotでデータをとってくる
    //     snapshot.docs.map((doc) => doc.data())
    //     //setMessagesという状態関数を使ってmessagesという状態変数に値を代入。
    //     //snapshotで取ってきたデータを中の.docsというデータをmapを使って取り出す。
    //     //map:複数のデータを1つずつ取り出す。=~forEach
    //     //取り出したデータを1つずつmessagesという変数に入れていく。
    //   });
    
      const q = query(collection(db, "messages"), orderBy("createdAt"), limit(50));
    
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        setMessages(data);
      });
      return unsubscribe;
    
  }, []);
  return (
    <div> 
      <SignOut />

      <div className="msgs">

        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div
              key={id} //どのdivタグか特定できるように
              // className={`msg ${
              //   uid === auth.currentUser.uid ? "sent" : "received"
              // }`}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      
      <SendMessage />  

    </div>
  )
}

export default Line