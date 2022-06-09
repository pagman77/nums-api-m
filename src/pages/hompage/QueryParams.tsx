import React from "react";
import {
 IonSlide,
} from '@ionic/react';
import '../Home.css';

const QueryParams: React.FC = () => {
 return (

  < IonSlide className="ion-text-start ion-padding" >
   <h2 className="ion-text-center">Query Parameters</h2>

   <h3>Fragment</h3>
   <p>Return the fact as a sentence fragment that can be easily included as part of a larger sentence. This means that the first word is lowercase and ending punctuation is omitted. For trivia and math, a noun phrase is returned that can be used in a sentence like "We now have more users than [fact as fragment]!".</p>
   <div className="code-block">
    <p>
     http://numbersapi.com/23/trivia?fragment
     &rArr; the number of times Julius Caesar was stabbed
    </p>
    <p>
     http://numbersapi.com/1969/year?fragment
     &rArr; an estimated 500 million people worldwide watch Neil Armstrong take his historic first steps on the Moon
    </p>
   </div>

   <h3>Notfound</h3>
   <p>The <code>notfound</code> field tells us what to do if the number is not found. You can give us:</p>
   <ul>
    <li>
     <p><code>default</code> to return one of our pre-written missing messages, or a message you supply with the <a href="#default"><code>default</code></a> query field. This is the default behaviour.
      <br />
      <p className="code-block">http://numbersapi.com/314159265358979
       &rArr; 314159265358979 is a boring number.</p></p>
    </li>
    <li>
     <p><code>floor</code> to round down to the largest number that does have an associated fact, and return that fact.
      <br />
      <p className="code-block">http://numbersapi.com/35353?notfound=floor
       &rArr; 35000 is the number of genes in a human being.</p></p>
    </li>
    <li>
     <p><code>ceil</code>, which is like <code>floor</code> but rounds up to the smallest number that has an associated fact.
      <br />
      <p className="code-block">http://numbersapi.com/-12344/year?notfound=ceil
       &rArr; 98 BC is the year that the Senate passes the Lex Caecilia Didia which bans omnibus bills.</p>
     </p>
    </li>
   </ul>
   <p>Combine with the <a href="#fragment">fragment</a> option to produce interesting facts about, for example, <a href="#visitors">the number of page shares</a>.</p>

   <h3>Default</h3>
   <p>The value of the <code>default</code> query field tells us what to return if we don't have a fact for the requested number.</p>
   <p className="code-block">
    http://numbersapi.com/1234567890987654321/year?default=Boring+number+is+boring.
    &rArr; Boring number is boring.
   </p>
   <p>See the <a href="#single-script-tag">HTML embed tag usage example</a>.</p>
   <h3>Min and Max</h3>
   <p>Restrict the range of values returned to the inclusive range [<strong><code>min</code></strong>, <strong><code>max</code></strong>] when <code>random</code> is given as the number.</p>
   <p className="code-block">
    http://numbersapi.com/random?min=10&max=20
    13 is the number of provinces and territories in Canada.
   </p>

   <h3>JSON</h3>
   <p>Include the query parameter <code>json</code>, or set the HTTP header <code>Content-Type</code> to <code>application/json</code>, or set the HTTP header <code>Accept</code> to <code>application/json</code> to return the fact and associated meta-data as a JSON object, with the properties:</p>
   <ul>
    <li><code>text</code>: A string of the fact text itself.</li>
    <li><code>found</code>: Boolean of whether there was a fact for the requested number.</li>
    <li><code>number</code>: The floating-point number that the fact pertains to. This may be useful for, eg. a <code>/random</code> request or <code>notfound=floor</code>. For a date fact, this is the 1-indexed day of a leap year (eg. 61 would be March 1st).</li>
    <li><code>type</code>: String of the category of the returned fact.</li>
    <li><code>date</code> (sometimes): A day of year associated with some year facts, as a string.</li>
    <li><code>year</code> (sometimes): A year associated with some date facts, as a string.</li>
   </ul>
   <p className="code-block">
    {`
       http://numbersapi.com/random/year?json
       &rArr; {
        "text": "2012 is the year that the century's second and last solar transit of Venus occurs on June 6.",
       "found": true,
       "number": 2012,
       "type": "year",
       "date": "June 6"
    }
      `}</p>
  </IonSlide >
 );
};


export default QueryParams;