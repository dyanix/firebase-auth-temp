
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Initialize the Firebase app
const app = initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: "AIzaSyCzyeKbVKHOz6hV5o1z5dCfhdKL4ZDE-Yw",
  authDomain: "drive-94ae0.firebaseapp.com",
  projectId: "drive-94ae0",
  storageBucket: "drive-94ae0.appspot.com",
  messagingSenderId: "460952343442",
  appId: "1:460952343442:web:25082ec6b0fda90931274b",
  measurementId: "G-PTZKMMB729"
});

// Access the authentication module using getAuth
export const auth = getAuth(app);

export default app;
