import { useState } from 'react';
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
import { getDateFact } from '../utils/getDateFact';

const initialFormData = { day: "", month: "" };

const Date: React.FC = () => {
 const [fact, setFact] = useState("Click button below for random fact!");
 const [formData, setFormData] = useState<IFormDate>(initialFormData);

 function handleChange(evt: IonInputCustomEvent<InputChangeEventDetail>) {
  const { name, value } = evt.target;
  setFormData(formData => ({
   ...formData,
   [name]: value,
  }));
 }

 async function handleSubmit(evt: React.SyntheticEvent): Promise<void> {
  evt.preventDefault();
  try {
   const date = await getDateFact(formData.day, formData.month);
   setFact(date);
   setFormData(initialFormData);
  }
  catch (error) {
   console.log(error);
  }
 }

 return (
  <IonPage>
   {/* NOTE: removed collapse class, nav bar wasn't showing up on mine, couldn't remember why we had it.*/}
   {/* <IonHeader collapse="condense"> */}
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
