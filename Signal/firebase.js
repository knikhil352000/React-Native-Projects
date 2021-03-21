import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCsUq0aSJTviRMAup8ZGk6DTYUL1FV65s0",
    authDomain: "signal-clone-9678b.firebaseapp.com",
    projectId: "signal-clone-9678b",
    storageBucket: "signal-clone-9678b.appspot.com",
    messagingSenderId: "179931676753",
    appId: "1:179931676753:web:89eec84c751f40da92b870"
  };

let app;

if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
export { db, auth }
