import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDbgJXqGDr0EKg7bdumiwqk4g8AtHzOTzc",
    authDomain: "clone-b1799.firebaseapp.com",
    databaseURL: "https://clone-b1799.firebaseio.com",
    projectId: "clone-b1799",
    storageBucket: "clone-b1799.appspot.com",
    messagingSenderId: "552380684875",
    appId: "1:552380684875:web:4f9add4c186eacfac3cbce",
    measurementId: "G-0D05M6EZTP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};