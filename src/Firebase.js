import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "firebase/auth";
import { getFirestore, doc, set, getDocs, collection, updateDoc } from "firebase/firestore";  // Added getDocs and collection


const firebaseConfig = {
  apiKey: "AIzaSyCqOG0bqh7jB04h-wc_Xp538LvIDisy99I",
  authDomain: "mitra-wwu-61819.firebaseapp.com",
  projectId: "mitra-wwu-61819",
  storageBucket: "mitra-wwu-61819.appspot.com",
  messagingSenderId: "84356824575",
  appId: "1:84356824575:web:9caebce412b576f48d7bca",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const signUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Sign-in successful:", userCredential);
      return userCredential;
    })
    .catch((error) => {
      console.log("Sign-in error:", error);
      throw error;
    });

    export const getUsers = async () => {
      try {
        const snapshot = await getDocs(collection(db, "users"));
        const users = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched users:", users);  // Debugging line
        return users;
      } catch (error) {
        console.error("Error fetching users:", error);
        return [];
      }
    };

export const createUserProfile = async (userId, profile) => {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, profile);
};

export const sendVerificationEmail = async (user) => {
  await sendEmailVerification(user)
    .then(() => {
      console.log("Verification email sent.");
    })
    .catch((error) => {
      console.log("Error sending verification email: ", error);
    });
};