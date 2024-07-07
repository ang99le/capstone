// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAOdiWTZQiOcyH8sKWY5XUm9lrwaG381j8",
  authDomain: "explore-3307d.firebaseapp.com",
  projectId: "explore-3307d",
  storageBucket: "explore-3307d.appspot.com",
  messagingSenderId: "732350411079",
  appId: "1:732350411079:web:1d3ef1c996dcf3d02c9c62",
  measurementId: "G-D4GDP0KBNR"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db=getFirestore(app);
export const auth=getAuth(app);
export const storage=getStorage(app);