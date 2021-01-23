 
 import firebase from 'firebase';
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBwnAONdyUlykAZCi8q5EzJWxP5EHxGK3w",
    authDomain: "mock-trader.firebaseapp.com",
    projectId: "mock-trader",
    storageBucket: "mock-trader.appspot.com",
    messagingSenderId: "957707573896",
    appId: "1:957707573896:web:b77f2a103f2d22f8b41d3d",
    measurementId: "G-HKP4CNXBF9"
  };

 // Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const auth = firebase.auth();

 export {auth}; 
 //firebase.analytics();