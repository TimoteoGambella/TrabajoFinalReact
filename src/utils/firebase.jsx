import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDFvCyWsnFm99_y5vhtNjIiS8cao8Hqffc",
    authDomain: "coderhouse-react-95526.firebaseapp.com",
    projectId: "coderhouse-react-95526",
    storageBucket: "coderhouse-react-95526.appspot.com",
    messagingSenderId: "48755742748",
    appId: "1:48755742748:web:b0d13f49b6c325bbc8a7d9"
};

const app = initializeApp(firebaseConfig)
export const db=getFirestore(app)
