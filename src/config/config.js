import {initializeApp} from 'firebase/app'
import {getFirestore, serverTimestamp} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getStorage } from 'firebase/storage';


//sokthinqwe22@gmail.com 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBY2k1WfukJKS0msWjUfaMavZipPDDMD9w",
  authDomain: "loan-online-project-87fbe.firebaseapp.com",
  projectId: "loan-online-project-87fbe",
  storageBucket: "loan-online-project-87fbe.firebasestorage.app",
  messagingSenderId: "243165089283",
  appId: "1:243165089283:web:34e2df58e528a1745d0836"
};


const firebaseApp = initializeApp(firebaseConfig)
const projectFirestore = getFirestore(firebaseApp)
const projectAuth = getAuth(firebaseApp)
const projectStorage = getStorage(firebaseApp)
const timestamp= serverTimestamp;


export {projectFirestore, projectAuth,timestamp, projectStorage}