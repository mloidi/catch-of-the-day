import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCWev8klt_yEhcwFSDNsPHAbOLjLYEe5z0",
  authDomain: "catch-of-the-day-mikel-loidi.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-mikel-loidi.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;

