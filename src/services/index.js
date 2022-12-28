import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAo8J7AAeEvzxWjNhTx7jhmxfZQ-Cq4F54",
  authDomain: "mupuviajes-9af09.firebaseapp.com",
  projectId: "mupuviajes-9af09",
  storageBucket: "mupuviajes-9af09.appspot.com",
  messagingSenderId: "304146480791",
  appId: "1:304146480791:web:bb09d29b13ccb08724b3d2",
  measurementId: "G-DGPQ0GVR7V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const storage = getStorage(app);
export default db;