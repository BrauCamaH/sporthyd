import React, { useState } from 'react';
import {
  IonModal,
  IonInput,
  IonContent,
  IonButton,
  IonIcon,
  IonToolbar,
  IonHeader,
} from '@ionic/react';
import './MessageListItem.css';
import { close } from 'ionicons/icons';

interface FormDialogProps {
  inputs: any;
  open: boolean;
  title: string;
  submitButtonText: string;
  setOpen: Function;
  onSubmit: Function;
}

interface Input {
  id: number;
  name: string;
  label: string;
  type: string;
}

const FormDialog: React.FC<FormDialogProps> = ({
  inputs,
  open,
  setOpen,
  title,
  submitButtonText,
  onSubmit,
}) => {
  const [formState, setFormState] = useState({
    values: {},
  });

  const handleChange = (event: any) => {
    setFormState((state) => ({
      ...state,
      values: {
        ...state.values,
        [event.target.name]: event.target.value,
      },
    }));
  };

  // const handleSubmit =(data : {})=>{
  //   onSubmit(formState)
  // }
  return (
    <IonModal isOpen={open} keyboardClose={false} showBackdrop={false}>
      <IonContent>
        <IonHeader translucent>
          <IonToolbar>
            <IonButton
              fill="clear"
              onClick={() => {
                setOpen(false);
              }}
            >
              <IonIcon icon={close} color="primary" />
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <div className="ion-padding ion-margin">
          <h1>{title}</h1>
          {inputs.map((input: Input) => (
            <IonInput
              key={input.id}
              name={input.name}
              placeholder={input.label}
              onIonChange={handleChange}
            />
          ))}
        </div>
        <IonButton expand="block">{submitButtonText || 'ACCEPT'}</IonButton>
      </IonContent>
    </IonModal>
  );
};

export default FormDialog;
