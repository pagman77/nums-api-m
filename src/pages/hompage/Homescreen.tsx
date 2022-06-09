import React from "react";
import {
 IonSlide,
 IonImg,
 IonRow
} from '@ionic/react';
import '../Home.css';

const Homescreen: React.FC = () => {
 return (
  <IonSlide className="ion-text-start ion-padding">
   <div className="slide">
    {/* <h1 id="api-title">Numbers API</h1> */}
    <IonImg src={"assets/logo-450-120.png"} alt="Numbers API" />
    {/* <IonImg id="nums-img"src={"assets/background.jpg"} alt="Numbers API" /> */}
    <IonRow id="title-reference">
     <h4 >API REFERENCE</h4>
    </IonRow>
    <IonRow id="text-reference-top">
     <p >
      Bring meaning to your metrics and stories to your dates with our API of interesting number facts.
     </p>
    </IonRow>
    <IonRow>
     <p id="text-reference-bottom">
      Swipe to see more details on how the API works!
     </p>
    </IonRow>
   </div>
  </IonSlide>
 );
};


export default Homescreen;