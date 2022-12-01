import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBU5RPygKSIefc4YZclZZbFsLVGVSe3iLE",
    authDomain: "kens-gallery.firebaseapp.com",
    databaseURL: "https://kens-gallery-default-rtdb.firebaseio.com",
    projectId: "kens-gallery",
    messagingSenderId: "871382600022",
};

const firebaseApp = initializeApp(firebaseConfig);

const database = getDatabase(firebaseApp);

export default database;
