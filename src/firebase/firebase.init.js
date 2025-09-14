// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkUIirkl7__6AjWzchu7nuTtllGRqFrxY",
    authDomain: "coffee-store-project-23260.firebaseapp.com",
    projectId: "coffee-store-project-23260",
    storageBucket: "coffee-store-project-23260.firebasestorage.app",
    messagingSenderId: "332017184368",
    appId: "1:332017184368:web:8dcb02bd01d1e49c5f4eb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);