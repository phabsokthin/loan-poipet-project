import {initializeApp} from 'firebase/app'
import {getFirestore, serverTimestamp} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getStorage } from 'firebase/storage';


//sokthinqwe22@gmail.com 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADZa9X4JJH8rafuYuopcmhuwHUkWK5Txg",
  authDomain: "loan-poipet-project.firebaseapp.com",
  projectId: "loan-poipet-project",
  storageBucket: "loan-poipet-project.firebasestorage.app",
  messagingSenderId: "234837996828",
  appId: "1:234837996828:web:aa99639ed3fcb0a0d9f6d9",
  measurementId: "G-XF2298CRD9"
};

const firebaseApp = initializeApp(firebaseConfig)
const projectFirestore = getFirestore(firebaseApp)
const projectAuth = getAuth(firebaseApp)
const projectStorage = getStorage(firebaseApp)
const timestamp= serverTimestamp;

export {projectFirestore, projectAuth,timestamp, projectStorage}