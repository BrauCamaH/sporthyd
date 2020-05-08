import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonToolbar,
  useIonViewWillEnter,
  IonButton,
  IonSearchbar,
} from '@ionic/react';
import MessageListItem from '../components/MessageListItem';
import { Message, getMessages } from '../data/messages';

import FormDialog from '../components/FormDialog';

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
  const [messages, setMessages] = useState<Message[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (data: {}): void => {};

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

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
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent />
        </IonRefresher>
        <IonList>
          {messages.map((m) => (
            <MessageListItem key={m.id} message={m} />
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
