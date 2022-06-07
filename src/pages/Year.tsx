import { useState } from 'react';
import axios from "axios";
import { IonGrid, IonRow, IonCol, IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Year.css';

const NUMBERS_API_URL = "http://numbersapi.com/random";
const Year: React.FC = () => {
 const [fact, setFact] = useState("Click button below for random fact!");

 async function getFact(): Promise<void> {
  const response = await axios.get(`${NUMBERS_API_URL}/year`);
  setFact(response.data);
 }

 return (
  <IonPage>
   <IonHeader>
    <IonToolbar>
     <IonTitle>Year</IonTitle>
    </IonToolbar>
   </IonHeader>
   <IonContent fullscreen>
    <IonHeader collapse="condense">
     <IonToolbar>
      <IonTitle size="large">Tab 1</IonTitle>
     </IonToolbar>
    </IonHeader>
    <IonGrid >
     <IonRow  >
      <IonCol size='12'>
       <IonText ><p>{fact}</p></IonText>
      </IonCol>
      <IonCol size='12'>
       <IonButton onClick={() => getFact()}>Get Fact</IonButton>
      </IonCol>
     </IonRow>
    </IonGrid>
   </IonContent>
  </IonPage>
 );
};

export default Year;