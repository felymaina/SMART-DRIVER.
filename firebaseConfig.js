// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword  } from "firebase/auth";


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCng0f9A36I86zMsOpQ7_mxj-TpufMmPmM",
  authDomain: "smart-driver-ca346.firebaseapp.com",
  projectId: "smart-driver-ca346",
  storageBucket: "smart-driver-ca346.appspot.com",
  messagingSenderId: "921607227677",
  appId: "1:921607227677:web:d96fbd977b7a02dcaef9f4",
  measurementId: "G-5CW49CK0BE"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });




































// import { initializeApp } from 'firebase/app';

// // Optionally import the services that you want to use
// // import {...} from "firebase/auth";
// // import {...} from "firebase/database";
// // import {...} from "firebase/firestore";
// // import {...} from "firebase/functions";
// // import {...} from "firebase/storage";

// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: 'api-key',
//   authDomain: 'project-id.firebaseapp.com',
//   databaseURL: 'https://project-id.firebaseio.com',
//   projectId: 'project-id',
//   storageBucket: 'project-id.appspot.com',
//   messagingSenderId: 'sender-id',
//   appId: 'app-id',
//   measurementId: 'G-measurement-id',
// };

// const app = initializeApp(firebaseConfig);
// // For more information on how to access Firebase in your project,
// // see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
