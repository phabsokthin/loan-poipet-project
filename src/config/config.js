import {initializeApp} from 'firebase/app'
import {getFirestore, serverTimestamp} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getStorage } from 'firebase/storage';


//sokthinqwe22@gmail.com 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCpyVVK1ynylCJUng1LgrsrK4ItC1uPykc",
  authDomain: "db-project-online.firebaseapp.com",
  projectId: "db-project-online",
  storageBucket: "db-project-online.firebasestorage.app",
  messagingSenderId: "118022511703",
  appId: "1:118022511703:web:8ceabd313a7ed205049712"
};

const firebaseApp = initializeApp(firebaseConfig)
const projectFirestore = getFirestore(firebaseApp)
const projectAuth = getAuth(firebaseApp)
const projectStorage = getStorage(firebaseApp)
const timestamp= serverTimestamp;


export {projectFirestore, projectAuth,timestamp, projectStorage}