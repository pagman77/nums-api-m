import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { schoolOutline, calendarNumberOutline, calculator, todayOutline  } from 'ionicons/icons';
import Math from './pages/Math';
import Trivia from './pages/Trivia';
import Date from './pages/Date';
import Year from './pages/Year';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './App.css'

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/math">
            <Math />
          </Route>
          <Route exact path="/trivia">
            <Trivia />
          </Route>
          <Route path="/date">
            <Date />
          </Route>
          <Route path="/year">
            <Year />
          </Route>
          <Route exact path="/">
            <Redirect to="/math" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="math" href="/math">
          <IonIcon icon={calculator} />
            <IonLabel>Math</IonLabel>
          </IonTabButton>
          <IonTabButton tab="trivia" href="/trivia">
            <IonIcon icon={schoolOutline} />
            <IonLabel>Trivia</IonLabel>
          </IonTabButton>
          <IonTabButton tab="date" href="/date">
          <IonIcon icon={calendarNumberOutline} />
            <IonLabel>Date</IonLabel>
          </IonTabButton>
          <IonTabButton tab="year" href="/year">
            <IonIcon icon={todayOutline} />
            <IonLabel>Year</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
