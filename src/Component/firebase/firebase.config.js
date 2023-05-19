// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZoCxstUyknM3dzpzyjBrriiNg4pP-sLM",
  authDomain: "marvelous-toys-b4dd5.firebaseapp.com",
  projectId: "marvelous-toys-b4dd5",
  storageBucket: "marvelous-toys-b4dd5.appspot.com",
  messagingSenderId: "885180475586",
  appId: "1:885180475586:web:95375590be3d1ecce0335b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;