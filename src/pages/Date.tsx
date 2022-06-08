import { useState } from 'react';
import axios from "axios";
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
 IonInput
} from '@ionic/react';
import './Date.css';
import { IFormDate } from '../../interfaces';
import { IonInputCustomEvent } from '@ionic/core';
import { InputChangeEventDetail } from '@ionic/react';

const NUMBERS_API_URL = "http://numbersapi.com";

const initialFormData = { day: "", month: "" };

const Date: React.FC = () => {
 const [fact, setFact] = useState("Click button below for random fact!");
 const [formData, setFormData] = useState<IFormDate>(initialFormData);

 async function getFact(day: string, month: string): Promise<void> {
  if (!day && !month) {
   const response = await axios.get(`${NUMBERS_API_URL}/random/date`);
   setFact(response.data);
  }
  else {
   const response = await axios.get(`${NUMBERS_API_URL}/${month}/${day}/date`);
   setFact(response.data);
  }
 }

 function handleChange(evt: IonInputCustomEvent<InputChangeEventDetail>) {
  const { name, value } = evt.target;
  setFormData(formData => ({
   ...formData,
   [name]: value,
  }));
 }

 //FIX: any
 async function handleSubmit(evt: any): Promise<void> {
  evt.preventDefault();
  try {
   await getFact(formData.day, formData.month);
   setFormData(initialFormData);
  }
  catch (error) {
   console.log(error);
  }
 }

 return (
  <IonPage>
   <IonHeader collapse="condense">
    <IonToolbar>
     <IonTitle size="large">Date</IonTitle>
    </IonToolbar>
   </IonHeader>
   <IonContent fullscreen>
    <IonGrid >
     <IonRow  >
      <IonCol size='12'>
       <IonText ><p>{fact}</p></IonText>
      </IonCol>
      <IonCol size='12'>
       <form onSubmit={handleSubmit}>
        <IonItem>
         <IonInput name='day'
          value={formData.day}
          placeholder="Pick a day"
          onIonChange={handleChange}
          clearInput
         ></IonInput>
         <br></br>
         <IonInput name='month'
          value={formData.month}
          placeholder="Pick a month"
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
     </IonRow>
    </IonGrid>
   </IonContent>
  </IonPage>
 );
};

export default Date;
