// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo8J7AAeEvzxWjNhTx7jhmxfZQ-Cq4F54",
  authDomain: "mupuviajes-9af09.firebaseapp.com",
  projectId: "mupuviajes-9af09",
  storageBucket: "mupuviajes-9af09.appspot.com",
  messagingSenderId: "304146480791",
  appId: "1:304146480791:web:bb09d29b13ccb08724b3d2",
  measurementId: "G-DGPQ0GVR7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;