import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBdmbNu7bPAz3c4AsmmkhNeBDfUmRsR7Wc",
  authDomain: "vernonsacademy.firebaseapp.com",
  projectId: "vernonsacademy",
  storageBucket: "vernonsacademy.appspot.com",
  messagingSenderId: "646797281809",
  appId: "1:646797281809:web:95cceb17b8a82e525d3fb0",
  measurementId: "G-FWHE6KLB3P"
};

const firebaseApp = initializeApp(firebaseConfig);

const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);

export default storage;
export {database};