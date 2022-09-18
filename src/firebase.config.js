import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'house-marketplace-app-d6b1e.firebaseapp.com',
  projectId: 'house-marketplace-app-d6b1e',
  storageBucket: 'house-marketplace-app-d6b1e.appspot.com',
  messagingSenderId: '996725039875',
  appId: '1:996725039875:web:eab8f70bf77ff23f7cff36',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
