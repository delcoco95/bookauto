// firebase.js (ou un autre nom de fichier JS)
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDBnBCSqI2iGizv3sdfYxotQPCZCg_l9I0",
  authDomain: "bookauto-34fa3.firebaseapp.com",
  projectId: "bookauto-34fa3",
  storageBucket: "bookauto-34fa3.appspot.com",
  messagingSenderId: "4845707742",
  appId: "1:4845707742:web:bbb13acca736b162d53d4f",
  measurementId: "G-T2R7RCB9YR"
};

// Initialisation
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
