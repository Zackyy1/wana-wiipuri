import firebase from '../../node_modules/firebase/app'
import '../../node_modules/firebase/firestore'
import '../../node_modules/firebase/auth'

var config = {
  apiKey: "AIzaSyAYK67VrKkUkt9B91S9X0u-ibaOcSD7tAc",
  authDomain: "wanawiipuridb.firebaseapp.com",
  databaseURL: "https://wanawiipuridb.firebaseio.com",
  projectId: "wanawiipuridb",
  storageBucket: "",
  messagingSenderId: "18386497039",
  appId: "1:18386497039:web:6229fa207c3be6dcee7d7a"
};
firebase.initializeApp(config);
  firebase.firestore();

  export default firebase;