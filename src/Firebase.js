import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  collection,
  getDoc,
  where,
  updateDoc,
  addDoc,
  serverTimestamp, query, orderBy
} from "firebase/firestore";
import { getAuth, browserLocalPersistence} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCqOG0bqh7jB04h-wc_Xp538LvIDisy99I",
  authDomain: "mitra-wwu-61819.firebaseapp.com",
  projectId: "mitra-wwu-61819",
  storageBucket: "mitra-wwu-61819.appspot.com",
  messagingSenderId: "84356824575",
  appId: "1:84356824575:web:9caebce412b576f48d7bca",
};

const app = initializeApp(firebaseConfig);

// Enable Firebase auth state persistence
getAuth(app).setPersistence(browserLocalPersistence)
    .then(() => {
      // Auth state persistence is enabled
    })
    .catch((error) => {
      console.error('Error enabling auth state persistence:', error);
    });

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

export const updateColorInFirebase = async (userId, color) => {
  const userRef = doc(db, 'users', userId);
  if (userRef) {
    await updateDoc(userRef, { color: color })
        .then(() => {
          console.log('Color updated in Firebase');
        })
        .catch((error) => {
          console.error('Error updating color in Firebase:', error);
        });
  }
  else {
    console.error("User not authenticated!");
  }
};

export const getUserColorFromFirebase = async (userId) => {
  const userRef = doc(db, 'users', userId);
  try {
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      return userData.color || '#aabbcc'; // Return the user's color if it exists, or a default color
    } else {
      // If the user document doesn't exist, return a default color
      return '#aabbcc';
    }
  } catch (error) {
    console.error('Error fetching user color from Firebase:', error);
    return '#aabbcc'; // Return a default color in case of an error
  }
};

// Function to create a chat room
export const createChatRoom = async (participants) => {
  // Add the chat room document to the 'chatrooms' collection
  const chatRoomRef = await addDoc(collection(db, 'chatrooms'), {
    participants,
    lastMessage: '',
    lastUpdated: serverTimestamp()
  });
  return chatRoomRef.id; // Return the newly created chat room ID
};

// Function to get chat rooms for a user
export const getUserChatRooms = async (userId) => {
  const q = query(collection(db, 'chatrooms'), where('participants', 'array-contains', userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Function to send a message to a chat room
export const sendMessage = async (chatRoomId, messageData) => {
  const messagesRef = collection(db, `chatrooms/${chatRoomId}/messages`);
  await addDoc(messagesRef, {
    ...messageData,
    timestamp: serverTimestamp() // Use server timestamp for consistency
  });
};

// Function to retrieve messages from a chat room
export const getMessages = async (chatRoomId) => {
  const messagesRef = collection(db, `chatrooms/${chatRoomId}/messages`);
  const q = query(messagesRef, orderBy('timestamp', 'asc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
