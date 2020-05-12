import React, { useState } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';

import { firestore } from '../firebase';

import './ViewAthlete.css';

interface ViewAthleteProps extends RouteComponentProps<{ id: string }> {}

const ViewAthlete: React.FC<ViewAthleteProps> = ({ match }) => {
  const [athlete, setAthlete] = useState<any>({});

  useIonViewWillEnter(async () => {
    const { id } = match.params;
    const doc = await firestore.collection('athletes').doc(id).get();
    setAthlete(doc.data());
  });

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="Inbox" defaultHref="/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {athlete ? (
          <>
            <IonItem>
              <IonIcon icon={personCircle} color="primary" />
              <IonLabel className="ion-text-wrap">
                <h2>
                  {athlete.name || ''}
                  <span className="date">
                    <IonNote />
                  </span>
                </h2>
                <h3>
                  <IonNote>{`Age: ${athlete.age || ''} `}</IonNote>
                </h3>
              </IonLabel>
            </IonItem>

            <div className="ion-padding">
              <p>{athlete.description}</p>
            </div>
          </>
        ) : (
          <div>Message not found</div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ViewAthlete;
