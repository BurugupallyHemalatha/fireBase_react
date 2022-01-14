import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBXdx41wjOD9OZGwz9AvL2ZDRXMImvkGWU",
    authDomain: "auth-9764f.firebaseapp.com",
    projectId: "auth-9764f",
    storageBucket: "auth-9764f.appspot.com",
    messagingSenderId: "460079948542",
    appId: "1:460079948542:web:73e79db4a70ed91dd8fbaf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;