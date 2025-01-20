import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUFZugDJVm0KjY-M1xnkFSlBCi2gBe7DI",
  authDomain: "sermondirectry.firebaseapp.com",
  projectId: "sermondirectry",
  storageBucket: "sermondirectry.firebasestorage.app",
  messagingSenderId: "33045303264",
  appId: "1:33045303264:web:6e045c6bff31024863e585",
  measurementId: "G-H186RSW3V0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);