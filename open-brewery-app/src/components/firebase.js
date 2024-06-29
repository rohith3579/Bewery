import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBr4rcrgedd7-VsCczoeCLN4_AhBjWTDVU",
  authDomain: "moengage-d14d0.firebaseapp.com",
  databaseURL: "https://moengage-d14d0-default-rtdb.firebaseio.com",
  projectId: "moengage-d14d0",
  storageBucket: "moengage-d14d0.appspot.com",
  messagingSenderId: "585443498456",
  appId: "1:585443498456:web:534e5967e2f34e0b783aad",
  measurementId: "G-8Z14HQ24VL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth=  getAuth(app);
export{auth};