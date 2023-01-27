import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOoLEW2Y8tcX2O0Q4dT01Vh-CuMbNfZX4",
  authDomain: "job-box-redux.firebaseapp.com",
  projectId: "job-box-redux",
  storageBucket: "job-box-redux.appspot.com",
  messagingSenderId: "411985947924",
  appId: "1:411985947924:web:f3b12bb59277d8b02fa601",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
