import "./ExploreContainer.css";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useState } from "react";

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
    <Cont
      style={{
        alignItems: user?.uid === uid ? "flex-end" : "flex-start",
      }}
    >
      <Bubble
        style={{
          background:
            user?.uid === uid
              ? "linear-gradient(180deg, #1E70FF 0%, #0046BF 100%)"
              : "linear-gradient(180deg, #02cc78 0%, #007354 100%)",
        }}
      >
        <Name>{name}</Name>
        <Text>{msg}</Text>
      </Bubble>
    </Cont>
  );
};

export default Message;

const Cont = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  z-index: -100;
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

const Bubble = styled.div`
  padding: 20px;
  margin: 10px 20px;
  border-radius: 25px;
  box-shadow: 0 0 20px #ffffff13;
  font-family: 'Outfit', sans-serif;
`;
