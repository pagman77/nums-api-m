import React from "react";
import {
 IonPage,
 IonContent,
 IonSlides,
 IonHeader,
 IonToolbar,
 IonTitle,
} from '@ionic/react';
import './Home.css';

import Homescreen from "./hompage/Homescreen";
import UrlStructure from "./hompage/UrlStructure";
import UsageExamples from "./hompage/UsageExamples";
import QueryParams from "./hompage/QueryParams";
import BatchRequests from "./hompage/BatchRequests";

/**Renders hompage componant with slide componants */
const Home: React.FC = () => {
 return (
  <IonPage>
   <IonHeader>
    <IonToolbar>
     <IonTitle size="large">Home</IonTitle>
    </IonToolbar>
   </IonHeader>
   <IonContent fullscreen className="ion-padding" scroll-x="false">
    <IonSlides>
     <Homescreen />
     <UrlStructure />
     <UsageExamples />
     <QueryParams />
     <BatchRequests />
    </IonSlides>
   </IonContent>
  </IonPage>
 );
};

export default Home;