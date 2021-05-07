import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDjCcDHDdcjCHcoR62HNJjdMiyaV94VcY0",
    authDomain: "clone-react-b7d73.firebaseapp.com",
    projectId: "clone-react-b7d73",
    storageBucket: "clone-react-b7d73.appspot.com",
    messagingSenderId: "42206427414",
    appId: "1:42206427414:web:bfad75d286fa1a8268f837",
    measurementId: "G-S31Z984JWV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();