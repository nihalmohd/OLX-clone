import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: 'AIzaSyDf0JHP-fi9toMSsKeKnmS69ekZY9yr1n4',
  authDomain: 'olx-b85b6.firebaseapp.com',
  projectId: 'olx-b85b6',
  storageBucket: 'olx-b85b6.appspot.com',
  messagingSenderId: '436524386965',
  appId: '1:436524386965:web:343fa6f347fe05ffe0299c',
  measurementId: 'G-NWSMRC06B4'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage=getStorage(app)

export { db, auth,storage };
