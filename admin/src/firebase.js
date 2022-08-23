import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD3wPTao2jRJj8wk3zSPRvz0H8jB2gfqPY",
    authDomain: "flickstv-90bd0.firebaseapp.com",
    projectId: "flickstv-90bd0",
    storageBucket: "flickstv-90bd0.appspot.com",
    messagingSenderId: "255653678483",
    appId: "1:255653678483:web:293f925ab1e608b1c82c66",
    measurementId: "G-QSYRTX7ETW"
  };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
