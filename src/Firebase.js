// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCSnVSAVboicGRH2Oak3heDQxi0crEUbGA",
  authDomain: "instagram-clone-a5a2b.firebaseapp.com",
  databaseURL: "https://instagram-clone-a5a2b.firebaseio.com",
  projectId: "instagram-clone-a5a2b",
  storageBucket: "instagram-clone-a5a2b.appspot.com",
  messagingSenderId: "482629061605",
  appId: "1:482629061605:web:03ec6097faa90bdf67fd0c",
  measurementId: "G-8YD8CK433Y"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage=firebase.storage();

export { db, auth,storage };