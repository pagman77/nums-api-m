
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
 IonItem,
 IonInput,
 IonAlert
} from '@ionic/react';
import './Date.css';
import { IFormDate } from '../interfaces';
import { IonInputCustomEvent } from '@ionic/core';
import { InputChangeEventDetail } from '@ionic/react';
import { getDateFact } from '../utils/getDateFact';

const initialFormData = { day: "", month: "" };
const defaultMessage = "Click the button below for a random fact, or input a month and a day below for a fact about that date!";

const Date: React.FC = () => {
 const [fact, setFact] = useState(defaultMessage);
 const [formData, setFormData] = useState<IFormDate>(initialFormData);
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
  const response = await getDateFact(formData.day, formData.month);

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
     <IonTitle size="large">Date</IonTitle>
    </IonToolbar>
   </IonHeader>
   <IonContent fullscreen>
    <IonGrid >
     <IonRow  >
      <IonCol size='12'>
       <IonText ><p className='fact-bg'>{fact}</p></IonText>
      </IonCol>
      <IonCol size='12'>
       <form onSubmit={handleSubmit}>
        <IonItem>
         <IonInput name='day'
          value={formData.day}
          placeholder="Day"
          onIonChange={handleChange}
          clearInput
         ></IonInput>
         <br></br>
         <IonInput name='month'
          value={formData.month}
          placeholder="Month"
          onIonChange={handleChange}
          clearInput
         ></IonInput>
        </IonItem>
        <IonButton className='ion-margin-top' type='submit'>
         {!formData.day && !formData.month
          ? "Random date fact!"
          : "Show me date fact!"}
        </IonButton>
       </form>
      </IonCol>
      <IonAlert
       isOpen={alert}
       onDidDismiss={() => setAlert(false)}
       cssClass='my-custom-class'
       message={error}
       buttons={['OK']}
      />
     </IonRow>
    </IonGrid>
   </IonContent>
  </IonPage>
 );
};

export default Date;
