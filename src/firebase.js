import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCez5hOnGYHpk_R1LK-25ePAZd_whNGbN8",
  authDomain: "clone-a1d91.firebaseapp.com",
  projectId: "clone-a1d91",
  storageBucket: "clone-a1d91.appspot.com",
  messagingSenderId: "196578420943",
  appId: "1:196578420943:web:6ac1bd478d4455824c2fba",
  measurementId: "G-R0YSKVKCMW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };