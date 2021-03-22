import firebase from "firebase/app"
import 'firebase/database'

if (!firebase.apps.length) {
 firebase.initializeApp({
   apiKey: "AIzaSyAPFVLBKRfDeVZv9TwPmJBezUoaXFy2ei8",
  authDomain: "hb-component.firebaseapp.com",
  databaseURL: "https://hb-component-default-rtdb.firebaseio.com",
  projectId: "hb-component",
  storageBucket: "hb-component.appspot.com",
  messagingSenderId: "738394030776",
  appId: "1:738394030776:web:d207ceb47dce37348fea4d"
 })
}

export default firebase
