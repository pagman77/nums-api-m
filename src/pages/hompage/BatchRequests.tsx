import React from "react";
import {
 IonSlide,
} from '@ionic/react';
import '../Home.css';

const BatchRequests: React.FC = () => {
 return (
  <IonSlide className="ion-text-start ion-padding">
   <h2 className="ion-text-center" id="batching">Batch Requests</h2>

   <p>To get facts about multiple numbers in one request, specify ranges for <code><strong>number</strong></code> in <code>http://numbersapi.com/<strong>number</strong>/<strong>type</strong></code>.</p>
   <p>A number range (inclusive) is specified as <code><strong>min</strong>..<strong>max</strong></code>. Separate multiple ranges and individual numbers with <code>,</code> (a comma).</p>
   <p>The response format will always be a JSON map from numbers to facts, of at most 100 numbers. The query parameter <a href="/#json"><code>json</code></a> may still be used to specify whether individual facts will be returned as string literals or JSON objects.</p>
   <p className="code-block">
    {`
      http://numbersapi.com/1..3,10
      &rArr; {
       "1": "1 is the number of dimensions of a line.",
      "2": "2 is the number of polynucleotide strands in a DNA double helix.",
      "3": "3 is the number of sets needed to be won to win the whole match in volleyball.",
      "10": "10 is the highest score possible in Olympics gymnastics competitions."
   }
     `}</p>
  </IonSlide>
 );
};


export default BatchRequests;