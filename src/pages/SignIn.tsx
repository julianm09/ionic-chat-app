import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Button from "../components/SignInButton";
import Chat from "../components/Chat";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import styled from "styled-components";
import { FirebaseError } from "firebase/app";

import { auth } from "../config/firebase";

interface Props {
  signIn: (e: any) => void;
}

const SignIn: React.FC<Props> = ({signIn}) => {


  return (
    <IonPage>
      <IonContent fullscreen>
        <Cont>
          <Button signIn={signIn} />
        </Cont>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;

const Cont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
