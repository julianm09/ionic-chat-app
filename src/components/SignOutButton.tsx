import "./ExploreContainer.css";
import styled from "styled-components";
import { app } from "../config/firebase";
import { IonContent, IonIcon } from "@ionic/react";
import { logOutSharp } from "ionicons/icons";

interface Props {
  handleSignOut: (e: any) => void;
}

const SignOutButton: React.FC<Props> = ({ handleSignOut }) => {
  return (
    <Cont onClick={handleSignOut}>
      <IonIcon icon={logOutSharp} />
    </Cont>
  );
};

export default SignOutButton;

const Cont = styled.button`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px 0 0 5px;
  background: linear-gradient(180deg, #1e70ff 0%, #0046bf 100%);
  color: white;
  font-size: 24px;
`;
