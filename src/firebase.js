import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDVY5LU0WBAm7jMwjyQGI_iQUkzvi4vs-w",
    authDomain: "clone-d4bf6.firebaseapp.com",
    databaseURL: "https://clone-d4bf6.firebaseio.com",
    projectId: "clone-d4bf6",
    storageBucket: "clone-d4bf6.appspot.com",
    messagingSenderId: "506601152684",
    appId: "1:506601152684:web:c3e4703ac79ad45c5eff09",
    measurementId: "G-Q7D1KTG3LR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};