import "./ExploreContainer.css";
import styled from "styled-components";

const Chat: React.FC = ({}) => {
  return (
    <Cont>
      <ChatBox></ChatBox>
      <ChatBar>
      <Input />
      <Button/>
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
  justify-content: center;
  align-items: center;
`;

const ChatBar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
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

const Button = styled.button`
  width: 50px;
  height: 50px;
  background: #7878ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
