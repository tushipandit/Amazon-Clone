import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCCFbNM7d99NTaE94vJoTKYATZsOwZULFs",
    authDomain: "clone-6a18b.firebaseapp.com",
    projectId: "clone-6a18b",
    storageBucket: "clone-6a18b.appspot.com",
    messagingSenderId: "306490822786",
    appId: "1:306490822786:web:d2292d6006f99074d8249b",
    measurementId: "G-2REE3TMMGY"
  });

const db = firebase.firestore(firebaseConfig);

const auth = firebase.auth();

const provider =new firebase.auth.GoogleAuthProvider();


export {db, auth  , provider};

