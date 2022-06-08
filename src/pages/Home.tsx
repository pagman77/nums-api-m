import React from "react";
import {
 IonPage,
 IonContent,
 IonSlide,
 IonSlides,
 IonList,
 IonImg,
 IonHeader,
 IonToolbar,
 IonTitle
} from '@ionic/react';
import './Home.css';
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

     {/* HOMESCREEN */}
     <IonSlide className="ion-text-start">
      <div className="slide">
       {/* <h1 id="logo-one">Numbers API</h1> */}
       <IonImg src={"assets/logo-450-120.png"} alt="Numbers API" />
       <h4>API REFERENCE</h4>
       <p>
        Bring meaning to your metrics and stories to your dates with our API of interesting number facts.
       </p>
       <p>
        Swipe to see more details on how the API works!
       </p>
      </div>
     </IonSlide>

     {/* URL STRUCTURE */}
     <IonSlide className="ion-text-start">
      <h2>URL Structure</h2>
      <div>
       Navigate to: <code>http://numbersapi.com/<strong>number</strong>/<strong>type</strong></code> to get a plain text response, where
      </div>
      <IonList>
       <p><strong><code>type</code></strong> is one of <code>trivia</code>, <code>math</code>, <code>date</code>, or <code>year</code>. Defaults to <code>trivia</code> if omitted.</p>
       <p><strong><code>number</code></strong> is</p>
       <p>an integer, or</p>
       <p>the keyword <code>random</code>, for which we will try to return a random available fact, or</p>
       <p>a day of year in the form <code><strong>month</strong>/<strong>day</strong></code> (eg. <code>2/29</code>, <code>1/09</code>, <code>04/1</code>), if <strong><code>type</code></strong> is <code>date</code></p>
       <p><a href="#batching">ranges of numbers</a></p>
      </IonList>
      <div>
       <p>
        http://numbersapi.com/42
        &rArr; 42 is the result given by Google and Bing for the query "the answer to life the universe and everything".
       </p>
       <p>
        http://numbersapi.com/2/29/date
        &rArr; February 29 is the day in 1504 that Christopher Columbus uses his knowledge of a lunar eclipse to convince Native Americans to provide him with supplies.
       </p>
       <p>
        http://numbersapi.com/random/year
        &rArr; 2013 is the year that China will attempt its first unmanned Moon landing.
       </p>
      </div>
     </IonSlide>

     {/* USAGE EXAMPLES */}
     <IonSlide className="ion-text-start">
      <h2>Usage Examples</h2>
      <h3>jQuery</h3>


      <p>HTML:</p>
      <code>We now have more users than &lt;span id="number"&gt;&lt;/span&gt;!</code>

      <p>JavaScript:</p>
      <p>{
       `$.get('http://numbersapi.com/1337/trivia?notfound=floor&amp;fragment', function(data) {
           $('#number').text(data);
          });`
      }
      </p>


      <p>Direct cross-origin requests like this are possible on browsers that support <a href="http://en.wikipedia.org/wiki/Cross-Origin_Resource_Sharing">CORS</a>. Live demo on <a href="http://jsfiddle.net/divad12/ffHEh/">JSFiddle</a>.</p>
     </IonSlide>

     {/* QUERY PARAMETER OPTIONS */}
     <IonSlide className="ion-text-start">

      <h2>Query Parameter Options</h2>
      <h3>Fragment</h3>


      <p>Return the fact as a sentence fragment that can be easily included as part of a larger sentence. This means that the first word is lowercase and ending punctuation is omitted. For trivia and math, a noun phrase is returned that can be used in a sentence like "We now have more users than [fact as fragment]!".</p>
      <p>
       http://numbersapi.com/23/trivia?fragment
       &rArr; the number of times Julius Caesar was stabbed
      </p>
      <p>
       http://numbersapi.com/1969/year?fragment
       &rArr; an estimated 500 million people worldwide watch Neil Armstrong take his historic first steps on the Moon
      </p>

      <h3>Notfound</h3>
      <p>The <code>notfound</code> field tells us what to do if the number is not found. You can give us:</p>


      <ul>
       <li>
        <p><code>default</code> to return one of our pre-written missing messages, or a message you supply with the <a href="#default"><code>default</code></a> query field. This is the default behaviour.
         <br />
         <p>http://numbersapi.com/314159265358979
          &rArr; 314159265358979 is a boring number.</p></p>
       </li>
       <li>
        <p><code>floor</code> to round down to the largest number that does have an associated fact, and return that fact.
         <br />
         <p>http://numbersapi.com/35353?notfound=floor
          &rArr; 35000 is the number of genes in a human being.</p></p>
       </li>
       <li>
        <p><code>ceil</code>, which is like <code>floor</code> but rounds up to the smallest number that has an associated fact.
         <br />
         <p>http://numbersapi.com/-12344/year?notfound=ceil
          &rArr; 98 BC is the year that the Senate passes the Lex Caecilia Didia which bans omnibus bills.</p>
        </p>
       </li>
      </ul>
      <p>Combine with the <a href="#fragment">fragment</a> option to produce interesting facts about, for example, <a href="#visitors">the number of page shares</a>.</p>


      <h3>Default</h3>


      <p>The value of the <code>default</code> query field tells us what to return if we don't have a fact for the requested number.</p>
      <p>
       http://numbersapi.com/1234567890987654321/year?default=Boring+number+is+boring.
       &rArr; Boring number is boring.
      </p>

      <p>See the <a href="#single-script-tag">HTML embed tag usage example</a>.</p>
      <h3>Min and Max</h3>
      <p>Restrict the range of values returned to the inclusive range [<strong><code>min</code></strong>, <strong><code>max</code></strong>] when <code>random</code> is given as the number.</p>
      <p>
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
      <p>
       {`
           http://numbersapi.com/random/year?json
           &rArr; {
            "text": "2012 is the year that the century's second and last solar transit of Venus occurs on June 6.",
           "found": true,
           "number": 2012,
           "type": "year",
           "date": "June 6"
        }
          `}
      </p>

     </IonSlide>

     {/* BATCH REQUESTS */}
     <IonSlide className="ion-text-start">

      <h2 id="batching">Batch Requests</h2>

      <p>To get facts about multiple numbers in one request, specify ranges for <code><strong>number</strong></code> in <code>http://numbersapi.com/<strong>number</strong>/<strong>type</strong></code>.</p>
      <p>A number range (inclusive) is specified as <code><strong>min</strong>..<strong>max</strong></code>. Separate multiple ranges and individual numbers with <code>,</code> (a comma).</p>
      <p>The response format will always be a JSON map from numbers to facts, of at most 100 numbers. The query parameter <a href="/#json"><code>json</code></a> may still be used to specify whether individual facts will be returned as string literals or JSON objects.</p>
      <p>
       {`
           http://numbersapi.com/1..3,10
           &rArr; {
            "1": "1 is the number of dimensions of a line.",
           "2": "2 is the number of polynucleotide strands in a DNA double helix.",
           "3": "3 is the number of sets needed to be won to win the whole match in volleyball.",
           "10": "10 is the highest score possible in Olympics gymnastics competitions."
        }
          `}
      </p>

     </IonSlide>

    </IonSlides>
   </IonContent>
  </IonPage>
 );
};

export default Home;