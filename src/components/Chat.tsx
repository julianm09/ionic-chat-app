import "./ExploreContainer.css";
import styled from "styled-components";
import {
  collection,
  addDoc,
  orderBy,
  limit,
  serverTimestamp,
  query,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { sendSharp } from "ionicons/icons";
import { auth } from "../config/firebase";
import Message from "./Message";
import { IonContent, IonIcon } from "@ionic/react";
import { useRef } from "react";

const Chat: React.FC = ({}) => {
  const [message, setMessage] = useState("");
  const [user] = useAuthState(auth);

  const id: string = uuidv4();

  console.log();

  const addMessage = async () => {
    setMessage("");
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
  const q = query(messageRef, orderBy("createdAt"), limit(1000));

  const [messages] = useCollectionData(q);

  const messageEnd = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messageEnd.current) {
      messageEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <Cont>
      <ChatBox scrollEvents={true} slot="fixed">
        {messages &&
          messages.map((msg) => (
            <Message
              msg={msg.message}
              time={msg.createdAt}
              uid={msg.uid}
              name={msg.userName}
            />
          ))}
        <div ref={messageEnd}></div>
      </ChatBox>

      <ChatBar>
        <Input value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button onClick={addMessage}>
          <IonIcon icon={sendSharp} />
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

const ChatBox = styled(IonContent)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  height: calc(100% - 120px);
  position: fixed;
  bottom: 70px;
`;

const ChatBar = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 25px;
`;

const Button = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(180deg, #1E70FF 0%, #0046BF 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 25px;
  position: absolute;''
`;
