import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAUeRSO1TsTQRdOT4hcZCmh0xh1hbGiw30",
    authDomain: "easychat-20a6c.firebaseapp.com",
    databaseURL: "https://easychat-20a6c.firebaseio.com",
    projectId: "easychat-20a6c",
    storageBucket: "easychat-20a6c.appspot.com",
    messagingSenderId: "1083661282119",
    appId: "1:1083661282119:web:fcad4781ccbcab4a457a62"
  };

export default function firebaseInit(){
    firebase.initializeApp(firebaseConfig);
}