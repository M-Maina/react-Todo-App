
import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBm0EWo59cLiiqRuk5HrMMvDPjUUJw8L9Y",
    authDomain: "todo-app-b4ec0.firebaseapp.com",
    projectId: "todo-app-b4ec0",
    storageBucket: "todo-app-b4ec0.appspot.com",
    messagingSenderId: "209986076256",
    appId: "1:209986076256:web:823c9f9e1e0ad18fc18d05",
    measurementId: "G-3G813WKV6K"

});


const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

export default db;