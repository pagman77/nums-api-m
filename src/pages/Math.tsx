import React, { useState } from 'react';
import {
 IonGrid,
 IonRow,
 IonCol,
 IonButton,
 IonContent,
 IonHeader,
 IonPage,
 IonText,
 IonTitle,
 IonToolbar,
 IonInput,
 IonItem,
 IonAlert
} from '@ionic/react';
import './Math.css';
import { IForm } from '../interfaces';
import { IonInputCustomEvent } from '@ionic/core';
import { InputChangeEventDetail } from '@ionic/react';
import { getFact } from '../utils/getFact';

const initialFormData = { number: "" };
const defaultMessage = "Click the button below for random fact, or input a number below for a math fact about that number!";

const Math: React.FC = () => {
 const [fact, setFact] = useState(defaultMessage);
 const [formData, setFormData] = useState<IForm>(initialFormData);
 const [error, setError] = useState("");
 const [alert, setAlert] = useState(false);

 function handleChange(evt: IonInputCustomEvent<InputChangeEventDetail>) {
  const { name, value } = evt.target;
  setFormData(formData => ({
   ...formData,
   [name]: value,
  }));
 }

 async function handleSubmit(evt: React.SyntheticEvent): Promise<void> {
  evt.preventDefault();
  const response = await getFact(formData.number, 'math');

  if (response.fact) setFact(response.fact);
  if (response.error) {
   setError(response.error);
   setAlert(true);
  }
  setFormData(initialFormData);

 }

 return (
  <IonPage>
   <IonHeader >
    <IonToolbar>
     <IonTitle size="large">Math</IonTitle>
    </IonToolbar>
   </IonHeader>
   <IonContent fullscreen>
    <IonGrid >
     <IonRow  >
      <IonCol size='12'>
       <IonText ><p className="fact-bg">{fact}</p></IonText>
      </IonCol>
      <IonCol size='12'>
       <form onSubmit={handleSubmit}>
        <IonItem>
         <IonInput name='number'
          value={formData.number}
          placeholder="Pick a number"
          onIonChange={handleChange}
          clearInput
         />
        </IonItem>
        <IonButton className='ion-margin-top' type='submit'>
         {!formData.number
          ? "Random math fact!"
          : "Show me the fact!"}
        </IonButton>
       </form>
       <IonAlert
        isOpen={alert}
        onDidDismiss={() => setAlert(false)}
        cssClass='my-custom-class'
        message={error}
        buttons={['OK']}
       />
      </IonCol>
     </IonRow>
    </IonGrid>
   </IonContent>
  </IonPage>
 );
};

export default Math;
