import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDocs, collection, getDoc } from "firebase/firestore";


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

export const signUp = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  console.log("Sign-up successful:", userCredential);
  // Create a user profile in Firestore whenever a new user signs up
  await createUserProfile(userCredential.user.uid, { email });
  return userCredential;
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Sign-in successful:", userCredential);
    return userCredential;
  } catch (error) {
    console.log("Sign-in error:", error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const snapshot = await getDocs(collection(db, "users"));
    const users = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Fetched users:", users);
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const createUserProfile = async (userId, data) => {
  const userRef = doc(db, 'users', userId);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    await setDoc(userRef, {
      ...data,
      contacts: []  // Initialize contacts as an empty array
    });
  }
};

export const sendVerificationEmail = async (user) => {
  try {
    await sendEmailVerification(user);
    console.log("Verification email sent.");
  } catch (error) {
    console.log("Error sending verification email: ", error);
  }
};