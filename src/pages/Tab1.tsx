import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Chat from "../components/Chat";
import SignOutButton from "../components/SignOutButton";
import "./Tab1.css";
import styled from "styled-components";

interface Props {
  handleSignOut: (e: any) => void;
}

const Tab1: React.FC<Props> = ({ handleSignOut }) => {
  return (
    <IonPage>
      <IonHeader>
        <Header>
          Julian Chat
          <SignOutButton handleSignOut={handleSignOut} />
        </Header>
      </IonHeader>
      <IonContent fullscreen>
        <Chat />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: #24242c;
  padding: 0 0 0 20px;
`;
