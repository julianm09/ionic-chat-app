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
  background: #001aff;
`;
