import firebase from "firebase";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA9K4Uw2Wwa02NP4i8WonMJ5PbbhX09jp4",
  authDomain: "contact-b6bc9.firebaseapp.com",
  projectId: "contact-b6bc9",
  storageBucket: "contact-b6bc9.appspot.com",
  messagingSenderId: "1059795741178",
  appId: "1:1059795741178:web:73af0d815947013d145c43",
};

export const Firebase = firebase.initializeApp(firebaseConfig);
