var firebase = require('firebase')
var config = {
    apiKey: "AIzaSyDY5idbtw11RqyGmOwJ2ZBbuoXNSEIqU7o",
    authDomain: "blog-9ae16.firebaseapp.com",
    databaseURL: "https://blog-9ae16.firebaseio.com",
    // projectId: "blog-9ae16",
    storageBucket: ""
    // messagingSenderId: "158136942127"
    };

firebase.initializeApp(config);

var db = firebase.database()

export default db