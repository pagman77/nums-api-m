import React from "react";
import {
 IonSlide,
} from '@ionic/react';
import '../Home.css';

const UsageExamples: React.FC = () => {
 return (

  <IonSlide className="ion-text-start ion-padding">
   <h2 className="ion-text-center">Usage Examples</h2>
   <h3>jQuery</h3>

   <p>HTML:</p>
   <p className="code-block">We now have more users than &lt;span id="number"&gt;&lt;/span&gt;!</p>

   <p>JavaScript:</p>
   <p className="code-block">{
    `$.get('http://numbersapi.com/1337/trivia?notfound=floor&amp;fragment', function(data) {
       $('#number').text(data);
      });`
   }</p>
   <p>Direct cross-origin requests like this are possible on browsers that support <a href="http://en.wikipedia.org/wiki/Cross-Origin_Resource_Sharing">CORS</a>. Live demo on <a href="http://jsfiddle.net/divad12/ffHEh/">JSFiddle</a>.</p>
  </IonSlide>
 );
};


export default UsageExamples;