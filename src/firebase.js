import { initializeApp } from "firebase/app";
import{getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCP9h1TRtTX6hsUbF4pPEvM-uOr7KpxQZg",
    authDomain: "niaaviationservices-cef6c.firebaseapp.com",
    projectId: "niaaviationservices-cef6c",
    storageBucket: "niaaviationservices-cef6c.appspot.com",
    messagingSenderId: "461331774782",
    appId: "1:461331774782:web:6a46c08c1692f13351406f",
}

const app = initializeApp(firebaseConfig);
export const storage =  getStorage(app)

//!firbase bucket 
//'gs://niaaviationservices-cef6c.appspot.com'