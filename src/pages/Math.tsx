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
  IonInput,
  IonItem
} from '@ionic/react';
import './Math.css';
import { IForm } from '../../interfaces';
import { IonInputCustomEvent } from '@ionic/core';
import { InputChangeEventDetail } from '@ionic/react';
import { getFact } from '../utils/getFact';

const initialFormData = { number: "" };

const Math: React.FC = () => {
  const [fact, setFact] = useState("Click button below for random fact!");
  const [formData, setFormData] = useState<IForm>(initialFormData);

  function handleChange(evt: IonInputCustomEvent<InputChangeEventDetail>) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt: any): Promise<void> {
    evt.preventDefault();
    try {
      const fact = await getFact(formData.number,'math');
      setFact(fact);
      setFormData(initialFormData);
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Math</IonTitle>
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
              <form onSubmit={handleSubmit}>
                <IonItem>
                  <IonInput name='number'
                    value={formData.number}
                    placeholder="Pick a number"
                    onIonChange={handleChange}
                    clearInput
                  ></IonInput>
                </IonItem>
                {(formData.number === "")
                  ?
                  <IonButton type='submit'>Random math fact!</IonButton>
                  :
                  <IonButton type='submit'>Show me the fact!</IonButton>
                }
              </form>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Math;
