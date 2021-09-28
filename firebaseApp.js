// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8CCPHyaexom43U1fsyF1O5KkAlfK-jpg",
    authDomain: "showmesticker.firebaseapp.com",
    databaseURL: "https://showmesticker-default-rtdb.firebaseio.com",
    projectId: "showmesticker",
    storageBucket: "showmesticker.appspot.com",
    messagingSenderId: "327422278596",
    appId: "1:327422278596:web:dd9b2645d8f0f3314e4291",
    measurementId: "G-3SK66TDXTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = firebase.database();
export const auth = firebase.auth()
export const storage = firebase.storage()