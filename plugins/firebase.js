import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
 const config = {
   apiKey: "AIzaSyCqYZmQMNPuNgyaHtXrzvf_OsHjczE9_rY",
   authDomain: "slack-clone-app-9160c.firebaseapp.com",
   databaseURL: "https://slack-clone-app-9160c.firebaseio.com",
   projectId: "slack-clone-app-9160c",
   storageBucket: "slack-clone-app-9160c.appspot.com",
   messagingSenderId: "959919679081",

   appId: "1:959919679081:web:e67eef562f2c85144f24f8",
    measurementId: "G-KT3P8MVHM8"
 }
 
 firebase.initializeApp(config);
}

const db = firebase.firestore()
export {
 firebase,
 db
}