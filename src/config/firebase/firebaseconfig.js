import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAQ7nPiwN-sdKAzwNNumjugkSqUiV_f310",
  authDomain: "project-1-be36e.firebaseapp.com",
  projectId: "project-1-be36e",
  storageBucket: "project-1-be36e.appspot.com",
  messagingSenderId: "586016641712",
  appId: "1:586016641712:web:6cf2141d4e3b76884ce175",
  measurementId: "G-KXR2V4L4WS"
}

const app = initializeApp(firebaseConfig);
export default app