import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhXhU_TN2bdNczKS5OwLPbgA0ya2ZLLoI",
  authDomain: "clone-1f3cb.firebaseapp.com",
  projectId: "clone-1f3cb",
  storageBucket: "clone-1f3cb.appspot.com",
  messagingSenderId: "881511734230",
  appId: "1:881511734230:web:6074ab6964c9dd9a6f6277",
  measurementId: "G-CX56P2NLG8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
