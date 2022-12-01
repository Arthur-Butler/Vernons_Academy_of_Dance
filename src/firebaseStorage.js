import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBU5RPygKSIefc4YZclZZbFsLVGVSe3iLE",
  authDomain: "kens-gallery.firebaseapp.com",
  databaseURL: "https://kens-gallery-default-rtdb.firebaseio.com",
  projectId: "kens-gallery",
  storageBucket: "kens-gallery.appspot.com",
  messagingSenderId: "871382600022",
  appId: "1:871382600022:web:4ad302c78373a2b28b2ef7"
};

const firebaseApp = initializeApp(firebaseConfig);

const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);

export default storage;
export {database};