
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCW6_wL4gm9PegM1_qgGMvs8oKlzdN0MgI",
  authDomain: "ecommerce-galaktika.firebaseapp.com",
  projectId: "ecommerce-galaktika",
  storageBucket: "ecommerce-galaktika.appspot.com",
  messagingSenderId: "541140325975",
  appId: "1:541140325975:web:b3eca1faebac443f5a7512"
};


const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}