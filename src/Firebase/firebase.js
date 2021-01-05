import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCHR1mnCqhMUdpkfah65OJFtmGH2Wck2DY",
    authDomain: "buyfy-e77eb.firebaseapp.com",
    projectId: "buyfy-e77eb",
    storageBucket: "buyfy-e77eb.appspot.com",
    messagingSenderId: "1081169838252",
    appId: "1:1081169838252:web:3fd9779a8c6abdc3fb1f09"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export var auth = firebase.auth();
export var firestore = firebase.firestore();
export var serverTimeStamp =()=> firebase.firestore.FieldValue.serverTimestamp();
export var googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;
