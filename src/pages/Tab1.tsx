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

interface Props {
  handleSignOut: (e: any) => void;
}

const Tab1: React.FC<Props> = ({ handleSignOut }) => {
  return (
    <IonPage>
      <IonHeader>

          <SignOutButton handleSignOut={handleSignOut}/>

      </IonHeader>
      <IonContent fullscreen>
        <Chat />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
