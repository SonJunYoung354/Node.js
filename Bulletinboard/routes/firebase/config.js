const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyBwC2JK4XM_J-CPwf6sKJKRI-0mSVRI504",
    authDomain: "fir-example-bba68.firebaseapp.com",
    databaseURL: "https://fir-example-bba68-default-rtdb.firebaseio.com",
    projectId: "fir-example-bba68",
    storageBucket: "fir-example-bba68.appspot.com",
    messagingSenderId: "830743542056",
    appId: "1:830743542056:web:cdf73bd982e9a4bfbd381d"
  };


firebase.initializeApp(firebaseConfig)
let database = firebase.database();

module.exports = database;