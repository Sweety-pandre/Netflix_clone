// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHXY_GmiYZpvAMnEX3rRviOxyqFPHD7GY",
  authDomain: "netflix-clone-1386e.firebaseapp.com",
  projectId: "netflix-clone-1386e",
  storageBucket: "netflix-clone-1386e.appspot.com",
  messagingSenderId: "460442532811",
  appId: "1:460442532811:web:c39c1d773e4f761db6d44e",
  measurementId: "G-JSTWK5E0BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);