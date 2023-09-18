// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FB_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_FB_APP_ID,
  measurementId: import.meta.env.VITE_REACT_APP_FB_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
