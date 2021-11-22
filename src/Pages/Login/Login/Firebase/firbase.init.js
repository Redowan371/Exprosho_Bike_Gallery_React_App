import { initializeApp } from "firebase/app";
import firebaseConfig from "./firbase.config";
const initializeFirebase = () => {
  initializeApp(firebaseConfig);
};
export default initializeFirebase;
