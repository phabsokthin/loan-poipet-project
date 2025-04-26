import {initializeApp} from 'firebase/app'
import {getFirestore, serverTimestamp} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getStorage } from 'firebase/storage';


//sokthinqwe22@gmail.com 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB2SRF9m9xaASfjPrUzfSs3FqrQf_LGYiM",
  authDomain: "loan-online-5eb43.firebaseapp.com",
  projectId: "loan-online-5eb43",
  storageBucket: "loan-online-5eb43.firebasestorage.app",
  messagingSenderId: "150990591865",
  appId: "1:150990591865:web:3379def873aa30826e41a8"
};

const firebaseApp = initializeApp(firebaseConfig)
const projectFirestore = getFirestore(firebaseApp)
const projectAuth = getAuth(firebaseApp)
const projectStorage = getStorage(firebaseApp)
const timestamp= serverTimestamp;


export {projectFirestore, projectAuth,timestamp, projectStorage}