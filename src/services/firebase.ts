import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMNDph_rWDTpVIgNBRmDvg8yv_RU8ZllQ",
  authDomain: "desafiodashgo.firebaseapp.com",
  projectId: "desafiodashgo",
  storageBucket: "desafiodashgo.appspot.com",
  messagingSenderId: "196078950730",
  appId: "1:196078950730:web:939457397b490b215109b3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
