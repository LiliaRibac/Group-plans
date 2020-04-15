import firebase from "firebase/app"
import 'firebase/firestore' //database
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "GROUP_API_ID",
  authDomain: "group-plans-e7cd4.firebaseapp.com",
  databaseURL: "https://group-plans-e7cd4.firebaseio.com",
  projectId: "group-plans-e7cd4",
  storageBucket: "group-plans-e7cd4.appspot.com",
  messagingSenderId: "1050373296502",
  appId: "1:1050373296502:web:7ea6ac8d1de914565eaa57",
  measurementId: "G-B397MJJDKF"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots :true})
export default firebase;