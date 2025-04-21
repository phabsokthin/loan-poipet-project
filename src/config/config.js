import {initializeApp} from 'firebase/app'
import {getFirestore, serverTimestamp} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getStorage } from 'firebase/storage';


//sokthinqwe22@gmail.com 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB17E-xGFHj7TfRAStBN4sjcVdEP9q8m1k",
  authDomain: "test1-b0d71.firebaseapp.com",
  projectId: "test1-b0d71",
  storageBucket: "test1-b0d71.firebasestorage.app",
  messagingSenderId: "81607578338",
  appId: "1:81607578338:web:2a21472909b2fcd99304bb"
};

const firebaseApp = initializeApp(firebaseConfig)
const projectFirestore = getFirestore(firebaseApp)
const projectAuth = getAuth(firebaseApp)
const projectStorage = getStorage(firebaseApp)
const timestamp= serverTimestamp;

export {projectFirestore, projectAuth,timestamp, projectStorage}