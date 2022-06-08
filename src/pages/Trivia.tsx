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
import './Trivia.css';
import { IForm } from '../../interfaces';
import { IonInputCustomEvent } from '@ionic/core';
import { InputChangeEventDetail } from '@ionic/react';
import { getFact } from '../utils/getFact';

const initialFormData = { number: "" }

const Trivia: React.FC = () => {
  const [fact, setFact] = useState("Click button below for random fact!");
  const [formData, setFormData] = useState<IForm>(initialFormData);

  function handleChange(evt: IonInputCustomEvent<InputChangeEventDetail>) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }))
  }

  async function handleSubmit(evt: any): Promise<void> {
    evt.preventDefault();
    try {
      const fact = await getFact(formData.number,'trivia');
      setFact(fact);
      setFormData(initialFormData)
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Trivia</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Trivia</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid >
          <IonRow  >
            <IonCol size='12'>
              <IonText ><p>{fact}</p></IonText>
            </IonCol>
            <IonCol size='12'>
              <form onSubmit={handleSubmit}>
                <IonItem>
                  <IonInput name='number'
                    value={formData.number}
                    placeholder="Pick a number"
                    onIonChange={handleChange}
                    clearInput
                  ></IonInput>
                </IonItem>
                <IonButton className='ion-margin-top' type='submit'>
                  {!formData.number
                    ? "Random math fact!"
                    : "Show me the fact!"}
                </IonButton>
              </form>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Trivia;
