import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
  IonButton,
  IonSearchbar,
} from '@ionic/react';
import AthleteListItem from '../components/AthleteListItem';

import FormDialog from '../components/FormDialog';
import { firestore } from '../firebase';

import './Home.css';

const inputs = [
  {
    id: 1,
    label: 'Name',
    name: 'name',
    type: 'text',
  },
  {
    id: 2,
    label: 'Age',
    name: 'age',
    type: 'number',
  },
  {
    id: 2,
    label: 'Description',
    name: 'description',
    type: 'number',
  },
];

const Home: React.FC = () => {
  const [athletes, setAthletes] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = async (athlete: {}) => {
    const docRef = await firestore.collection('athletes').add(athlete);
    const doc = await docRef.get();

    const newPost = { id: doc.id, ...doc.data() };

    setAthletes((state) => [...state, newPost]);
  };

  useIonViewWillEnter(async () => {
    const snapshot = await firestore.collection('athletes').get();
    const athletesData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setAthletes(athletesData);
  });

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <div className="toolbar">
            <IonSearchbar />
            <IonButton
              fill="clear"
              style={{ heigth: '100%' }}
              onClick={() => {
                setOpenModal(true);
              }}
            >
              ADD
            </IonButton>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {athletes.map((m) => (
            <AthleteListItem key={m.id} athlete={m} />
          ))}
        </IonList>
        {openModal && (
          <FormDialog
            inputs={inputs}
            open={openModal}
            submitButtonText="CREATE NEW USER"
            title="Fill the fields bellow"
            setOpen={setOpenModal}
            onSubmit={handleSubmit}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
