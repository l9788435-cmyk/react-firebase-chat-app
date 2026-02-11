import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyBJEgdrD8I-00fvegO5_dUDHdfQMSo_R84",
  authDomain: "create-react-app-987a5.firebaseapp.com",
  projectId: "create-react-app-987a5",
  storageBucket: "create-react-app-987a5.firebasestorage.app",
  messagingSenderId: "159319629506",
  appId: "1:159319629506:web:0317baeb7de5e7500ca55b",
  measurementId: "G-0MSP5VC9VS"
};

console.log("🔥 Firebase API Key Loaded:", firebaseConfig.apiKey);

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
