import React from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonPage,
  IonApp,
  IonContent,
  IonSlide,
  IonSlides,
  IonButton,
  IonIcon,
  IonList,
  IonInfiniteScroll,
  IonInfiniteScrollContent
} from '@ionic/react';
const Home: React.FC = () => {
  return (
    <IonPage>

    <IonApp>
      <IonContent fullscreen className="ion-padding" scroll-y="false">
        <IonSlides>
          <IonSlide>
            <div className="slide">
              {/* <img src="./slide-1.png" /> */}
                <h1 id="logo-one">
                  Numbers
                  <span id="logo-two">API</span>
                </h1>
                <h4>API REFERENCE</h4>
              <p>
                  Bring meaning to your metrics and stories to your dates with our API of interesting number facts.
              </p>
            </div>
          </IonSlide>

          <IonSlide>
            {/* <img src="./slide-2.png" /> */}
              <IonInfiniteScroll>
                <IonInfiniteScrollContent>
              <h2>URL Structure</h2>
                    <IonGrid>
                      <IonRow>
                        <IonCol>
<IonContent>

              Just hit <code>http://numbersapi.com/<strong>number</strong>/<strong>type</strong></code> to get a plain text response, where
</IonContent>
                        </IonCol>
                      </IonRow>
                      <IonRow>

                        <IonCol>
                  <IonList>
                <li><strong><code>type</code></strong> is one of <code>trivia</code>, <code>math</code>, <code>date</code>, or <code>year</code>. Defaults to <code>trivia</code> if omitted.</li>
                <li><strong><code>number</code></strong> is</li>
                <li>an integer, or</li>
                <li>the keyword <code>random</code>, for which we will try to return a random available fact, or</li>
                <li>a day of year in the form <code><strong>month</strong>/<strong>day</strong></code> (eg. <code>2/29</code>, <code>1/09</code>, <code>04/1</code>), if <strong><code>type</code></strong> is <code>date</code></li>
                <li><a href="#batching">ranges of numbers</a></li>
                </IonList>

                        </IonCol>

                      </IonRow>
                    </IonGrid>
  

              <pre>
                http://numbersapi.com/42
                &rArr; 42 is the result given by Google and Bing for the query "the answer to life the universe and everything".

                http://numbersapi.com/2/29/date
                &rArr; February 29 is the day in 1504 that Christopher Columbus uses his knowledge of a lunar eclipse to convince Native Americans to provide him with supplies.

                http://numbersapi.com/random/year
                &rArr; 2013 is the year that China will attempt its first unmanned Moon landing.
              </pre>

                </IonInfiniteScrollContent>
              </IonInfiniteScroll>
          </IonSlide>

          <IonSlide>
            <img src="./slide-3.png" />
            <h2>What is Appflow?</h2>
            <p>
              <b>Appflow</b> is a powerful set of services and features built on top of Ionic Framework that brings a
              totally new level of app development agility to mobile dev teams.
            </p>
          </IonSlide>

          <IonSlide>
            <img src="./slide-4.png" />
            <h2>Ready to Play?</h2>
            <IonButton fill="clear">Continue <IonIcon slot="end" name="arrow-forward"></IonIcon></IonButton>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonApp>
    </IonPage>
  )
}

export default Home;