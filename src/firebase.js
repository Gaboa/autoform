import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBdwzqJcEwBuvIOayvaaevNGY2jsnMAJDw",
    authDomain: "autoform-24b45.firebaseapp.com",
    databaseURL: "https://autoform-24b45.firebaseio.com",
    projectId: "autoform-24b45",
    storageBucket: "autoform-24b45.appspot.com",
    messagingSenderId: "978218298991",
    appId: "1:978218298991:web:feb2912680b8c2ece2279a"
})

const db = app.firestore()

export { db }