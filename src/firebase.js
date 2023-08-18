// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB1z_JbQYz6ayx5eT_R2NNH-hQfCLnl6rE",
    authDomain: "clone-341b7.firebaseapp.com",
    projectId: "clone-341b7",
    storageBucket: "clone-341b7.appspot.com",
    messagingSenderId: "527853600761",
    appId: "1:527853600761:web:dcdf7ccdd7c13412110728",
    measurementId: "G-VFV0LWX7TE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{db, auth};
