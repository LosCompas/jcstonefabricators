import Head from 'next/head'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5ldSLtd8hOPykLCjslXsJ-Oc-C9ISW2c",
  authDomain: "jcstonefabricators-3ff5f.firebaseapp.com",
  projectId: "jcstonefabricators-3ff5f",
  storageBucket: "jcstonefabricators-3ff5f.appspot.com",
  messagingSenderId: "1021621722698",
  appId: "1:1021621722698:web:1dc9b20934da5c5f8990b3",
  measurementId: "G-3JGHW802T7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export default function Home() {
  return (
    <div>Hello World</div>
  )
}
