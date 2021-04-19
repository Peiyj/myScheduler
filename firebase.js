import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDWq3FNayBHW-scvE06AVM0K7uCVh_Mktw",
  authDomain: "myscheduler-24b06.firebaseapp.com",
  databaseURL: "https://myscheduler-24b06-default-rtdb.firebaseio.com",
  projectId: "myscheduler-24b06",
  storageBucket: "myscheduler-24b06.appspot.com",
  messagingSenderId: "453226891392",
  appId: "1:453226891392:web:fe06505e9116192b3c3e65",
  measurementId: "G-SBTS9GHJJV"
};

firebase.initializeApp(firebaseConfig);

export { firebase };