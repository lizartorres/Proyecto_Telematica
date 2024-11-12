const firebase = require("firebase");
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpaESU4TXDxYJ47L1ocTUa_HOwwG9-IRM",
  authDomain: "proyectotelematica3-60bff.firebaseapp.com",
  projectId: "proyectotelematica3-60bff",
  storageBucket: "proyectotelematica3-60bff.appspot.com",
  messagingSenderId: "605669491710",
  appId: "1:605669491710:web:89db93b3667ed8075376af"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
module.exports = db

