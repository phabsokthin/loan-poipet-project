import {initializeApp} from 'firebase/app'
import {getFirestore, serverTimestamp} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getStorage } from 'firebase/storage';


//sokthinqwe22@gmail.com 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAUg6JU0ALemD2swAAJrDxU3J6NPw4lga0",
  authDomain: "loan-online-project.firebaseapp.com",
  projectId: "loan-online-project",
  storageBucket: "loan-online-project.firebasestorage.app",
  messagingSenderId: "72175966149",
  appId: "1:72175966149:web:9a5c9e3295c13346ce9dac",
  measurementId: "G-JKWK765Z64"
};


const firebaseApp = initializeApp(firebaseConfig)
const projectFirestore = getFirestore(firebaseApp)
const projectAuth = getAuth(firebaseApp)
const projectStorage = getStorage(firebaseApp)
const timestamp= serverTimestamp;

export {projectFirestore, projectAuth,timestamp, projectStorage}