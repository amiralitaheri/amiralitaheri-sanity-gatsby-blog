import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoL57Uiur1AU8JOtPYG3AatbdUyf_QfOc",
  authDomain: "amiralitaheri.firebaseapp.com",
  databaseURL: "https://amiralitaheri.firebaseio.com",
  projectId: "amiralitaheri",
  storageBucket: "amiralitaheri.appspot.com",
  messagingSenderId: "690083208550",
  appId: "1:690083208550:web:b3ee6d11bc055115e9fca7",
  measurementId: "G-F1EV57PV2M"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//todo: fix build problem
// https://stackoverflow.com/questions/61334290/gatsbyjs-with-firebase-webpackerror-referenceerror-idbindex-is-not-defined/61336305#61336305
