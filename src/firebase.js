import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';
const instance = {
    apiKey: "AIzaSyAUXO4X4zOCgaXhaJiu36VmIUc4pf2InJk",
    authDomain: "netflix-clone-practice-88244.firebaseapp.com",
    projectId: "netflix-clone-practice-88244",
    storageBucket: "netflix-clone-practice-88244.appspot.com",
    messagingSenderId: "201773805275",
    appId: "1:201773805275:web:4df95448c8ce695e5e66fe"
  };

  const firebaseApp=firebase.initializeApp(instance)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth}
  export default db;