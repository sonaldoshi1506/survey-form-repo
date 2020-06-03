import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD9EssG0qMW3xBkz1N0T8nCCuXqT9DIDec",
    authDomain: "salon-experiences.firebaseapp.com",
    databaseURL: "https://salon-experiences.firebaseio.com",
    projectId: "salon-experiences",
    storageBucket: "salon-experiences.appspot.com",
    messagingSenderId: "382499852566",
    appId: "1:382499852566:web:bba1eb4b677ec9c06c0037",
    measurementId: "G-MCR679TRDZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;
