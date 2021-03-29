import firebase from 'firebase';
require("@firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyALA7RKSWY2fCKy8ONzKBuhwqZ5YCsTrJM",
  authDomain: "wily-app-7548c.firebaseapp.com",
  projectId: "wily-app-7548c",
  storageBucket: "wily-app-7548c.appspot.com",
  messagingSenderId: "789464079013",
  appId: "1:789464079013:web:bf08973825c3df72ab0b4c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();