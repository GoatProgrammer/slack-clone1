// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFshDuLrzkbTIPicG0Y4gaW1vJXiLQRWQ",
  authDomain: "slack-clone-88c69.firebaseapp.com",
  databaseURL: "https://slack-clone-88c69.firebaseio.com",
  projectId: "slack-clone-88c69",
  storageBucket: "slack-clone-88c69.appspot.com",
  messagingSenderId: "736524300691",
  appId: "1:736524300691:web:54b87a93cc0cc3b053b866",
  measurementId: "G-P5G7XT792S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

