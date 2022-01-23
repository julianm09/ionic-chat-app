import "./ExploreContainer.css";
import styled from "styled-components";
import { app } from "../config/firebase";

interface Props {
  signIn: (e: any) => void;
}

const Button: React.FC<Props> = ({ signIn }) => {
  return <Cont onClick={signIn}>Sign In With Google</Cont>;
};

export default Button;

const Cont = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(180deg, #1e70ff 0%, #0046bf 100%);
  border-radius: 25px;
  font-family: "Outfit", sans-serif;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 20px #ffffff33;
  }
`;
