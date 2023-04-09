// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqOG0bqh7jB04h-wc_Xp538LvIDisy99I",
  authDomain: "mitra-wwu-61819.firebaseapp.com",
  projectId: "mitra-wwu-61819",
  storageBucket: "mitra-wwu-61819.appspot.com",
  messagingSenderId: "84356824575",
  appId: "1:84356824575:web:9caebce412b576f48d7bca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Creating user with email and password
export const signUp = (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("true");  // Log "true" to the console if sign-in is successful
      return true;  // Return true after successfully signing in
    })
    .catch((error) => {
      console.log(error);  // Log any errors that occur during sign-in
      return false;  // Return false if sign-in fails
    });
    
};
  
