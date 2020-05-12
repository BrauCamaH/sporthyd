import React from 'react';
import { IonItem, IonLabel, IonNote } from '@ionic/react';
import { Athlete } from '../models/Athlete';
import './AthleteListItem.css';

interface AthleteListItemProps {
  athlete: Athlete;
}

const AthleteListItem: React.FC<AthleteListItemProps> = ({ athlete }) => (
  <IonItem routerLink={`/athlete/${athlete.id}`} detail={false}>
    <div slot="start" className="dot dot-unread" />
    <IonLabel className="ion-text-wrap">
      <h2>
        {athlete.name}
        <span className="date">
          <IonNote />
        </span>
      </h2>
      <h3>{`Age: ${athlete.age}`}</h3>
      <p>{athlete.description}</p>
    </IonLabel>
  </IonItem>
);

export default AthleteListItem;
