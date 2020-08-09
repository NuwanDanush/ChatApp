import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7JXWa0V_K7uJut4aauhcSLKCQZMj_JhQ",
  authDomain: "easychat-36ce3.firebaseapp.com",
  databaseURL: "https://easychat-36ce3.firebaseio.com",
  projectId: "easychat-36ce3",
  storageBucket: "easychat-36ce3.appspot.com",
  messagingSenderId: "785951627183",
  appId: "1:785951627183:web:7d5e9c4985f0df0be7015a",
  measurementId: "G-JES8B85PG5",
};

export default function firebaseInit() {
  firebase.initializeApp(firebaseConfig);
}
