import firebase from 'firebase/app';
import 'firebase/firestore';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}
const config: FirebaseConfig = {
  apiKey: 'AIzaSyDi6PZipXq2uf8ufB_ptQl9J9lUxdJRhaw',
  authDomain: 'sporthyd-467c5.firebaseapp.com',
  databaseURL: 'https://sporthyd-467c5.firebaseio.com',
  projectId: 'sporthyd-467c5',
  storageBucket: 'sporthyd-467c5.appspot.com',
  messagingSenderId: '906478375892',
  appId: '1:906478375892:web:4b150d4df67f5a4a317c41',
  measurementId: 'G-T2V6JPHYCC',
};

firebase.initializeApp(config);
export const firestore = firebase.firestore();
const settings: firebase.firestore.Settings = {};
firestore.settings(settings);
export default firebase;
