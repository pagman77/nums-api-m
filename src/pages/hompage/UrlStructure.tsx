import React from "react";
import {
 IonSlide,
} from '@ionic/react';
import '../Home.css';

const UrlStructure: React.FC = () => {
 return (
  <IonSlide className="ion-text-start ion-padding">
   <h2 className="ion-text-center">URL Structure</h2>
   <div>
    <p>Navigate to: <code>http://numbersapi.com/<strong>number</strong>/<strong>type</strong></code> to get a plain text response, where <strong><code>type</code></strong> is one of <code>trivia</code>, <code>math</code>, <code>date</code>, or <code>year</code>.</p>
    <p>Defaults to <code>trivia</code> if type is omitted.</p>
    <p><strong><code>number</code></strong> can be:</p>
    <ul>
     <li>an integer</li>
     <li>the keyword <code>random</code>, for which we will try to return a random available fact</li>
     <li>a day of year in the form <code><strong>month</strong>/<strong>day</strong></code> (eg. <code>2/29</code>, <code>1/09</code>, <code>04/1</code>), if <strong><code>type</code></strong> is <code>date</code></li>
     <li><a href="#batching">ranges of numbers</a></li>
    </ul>
   </div>
   <div>
    <p className="code-block">
     http://numbersapi.com/42
     &rArr; 42 is the result given by Google and Bing for the query "the answer to life the universe and everything".
    </p>
    <p className="code-block">
     http://numbersapi.com/2/29/date
     &rArr; February 29 is the day in 1504 that Christopher Columbus uses his knowledge of a lunar eclipse to convince Native Americans to provide him with supplies.
    </p>
    <p className="code-block">
     http://numbersapi.com/random/year
     &rArr; 2013 is the year that China will attempt its first unmanned Moon landing.
    </p>
   </div>
  </IonSlide>
 );
};

export default UrlStructure;