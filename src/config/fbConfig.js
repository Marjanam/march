import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCBWkuzUGCg-QZjIPo96nZeAU-lhlHjIUk",
  authDomain: "ninja-19feb2019.firebaseapp.com",
  databaseURL: "https://ninja-19feb2019.firebaseio.com",
  projectId: "ninja-19feb2019",
  storageBucket: "ninja-19feb2019.appspot.com",
  messagingSenderId: "676179938194"
};
firebase.initializeApp(config);

export default firebase;
