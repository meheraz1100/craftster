// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXXBjIoIaGrujLQonrI2vdBTZXegpjw7c",
  authDomain: "craft-ster.firebaseapp.com",
  projectId: "craft-ster",
  storageBucket: "craft-ster.appspot.com",
  messagingSenderId: "115272503388",
  appId: "1:115272503388:web:6599db8d67877d6d175699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;