import "./ExploreContainer.css";
import styled from "styled-components";
import { app } from "../config/firebase";
import {
  collection,
  addDoc,
  getDocs,
  Firestore,
  orderBy,
  limit,
  serverTimestamp,
  query,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { sendOutline, sendSharp } from "ionicons/icons";
import { auth } from "../config/firebase";
import Message from './Message'
import { IonIcon } from "@ionic/react";

const Chat: React.FC = ({}) => {
  const [message, setMessage] = useState("");
  const [user] = useAuthState(auth);

  const id: string = uuidv4();

  console.log();

  const addMessage = async () => {
    setMessage('')
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        id: id,
        message: message,
        createdAt: serverTimestamp(),
        uid: user?.uid,
        userName: user?.displayName,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const messageRef = collection(db, "messages");
  const q = query(messageRef, orderBy("createdAt"), limit(20));

  const [messages] = useCollectionData(q);

  return (
    <Cont>
      <ChatBox>
        {messages && messages.map((msg) => <Message msg={msg.message} time={msg.createdAt} uid={msg.uid} name={msg.userName}/>)}
      </ChatBox>
      <ChatBar>
        <Input value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button onClick={addMessage}>
          <IonIcon icon={sendSharp}/>
        </Button>
      </ChatBar>
    </Cont>
  );
};

export default Chat;

const Cont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ChatBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`;

const ChatBar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  width: 50px;
  height: 50px;
  background: #7878ff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

