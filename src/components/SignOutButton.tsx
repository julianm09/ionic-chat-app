import "./ExploreContainer.css";
import styled from "styled-components";
import { app } from "../config/firebase";

interface Props {
  handleSignOut: (e: any) => void;
}

const SignOutButton: React.FC<Props> = ({ handleSignOut }) => {
  return <Cont onClick={handleSignOut}>Sign Out</Cont>;
};

export default SignOutButton;

const Cont = styled.button`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #001aff;
`;
