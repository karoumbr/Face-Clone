import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBOWEDzxWCoPP_nh9wHxtE5dq1n2hdpxzI",
    authDomain: "tp-facebookclone.firebaseapp.com",
    projectId: "tp-facebookclone",
    storageBucket: "tp-facebookclone.appspot.com",
    messagingSenderId: "203390695316",
    appId: "1:203390695316:web:b9e00954ac55c8ac654181",
    measurementId: "G-XR1LL3ZJ52"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider}
export default db