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

const getFriendlyErrorMessage = (errorCode) => {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'The email address is not valid.';
    case 'auth/user-disabled':
      return 'The user account has been disabled by an administrator.';
    case 'auth/user-not-found':
      return 'There is no user record corresponding to this email. Please check your email and try again.';
    case 'auth/wrong-password':
      return 'The password is invalid. Please check your password and try again.';
    default:
      return 'An error occurred. Please try again.';
  }
};
//Creating user with email and password
export const signUp = (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};
//Sign in 
export const signIn = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Sign-in successful:", userCredential);
      return userCredential;
    })
    .catch((error) => {
      console.log("Sign-in error:", error);
      throw error; // Throw the error so that it's caught in the Signin component
    });
};
  
