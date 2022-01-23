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
  Timestamp,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../config/firebase";

interface Props {
  msg: string;
  time: string;
  uid: string;
  name: string;
}

const Message: React.FC<Props> = ({ msg, time, name, uid }) => {
  console.log(time);
  const [user] = useAuthState(auth);

  return (
    <Cont>
      <Name style={{ color: user?.uid === uid ? "#7878ff" : "white" }}>
        {name}
      </Name>
      <Text>{msg}</Text>
    </Cont>
  );
};

export default Message;

const Cont = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-top: 1px solid grey;
  flex-direction: column;
`;

const Text = styled.div`
  display: flex;
  flex-wrap: wrap;
  word-wrap: break-word;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const Date = styled.div``;
