import firebase from "firebase";

const firebaseConfig = {
 //Your Firebase Configuration
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
