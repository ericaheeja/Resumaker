import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8IKqQYemgcJsmjnVPf0UZ4Sd1_eVxRD0",
    authDomain: "resumaker-c20c5.firebaseapp.com",
    databaseURL: "https://resumaker-c20c5-default-rtdb.firebaseio.com",
    projectId: "resumaker-c20c5",
    storageBucket: "resumaker-c20c5.appspot.com",
    messagingSenderId: "775015802896",
    appId: "1:775015802896:web:cdb5eadaf785fa45258295",
    measurementId: "G-2K90ZGBYKL"
  };

  firebase.initializeApp(firebaseConfig);

  export const firebaseStore = firebase.firestore();
  export const firebaseStorage = firebase.storage();