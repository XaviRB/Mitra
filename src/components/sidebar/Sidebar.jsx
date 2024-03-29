import React, { useState, useEffect } from 'react';
import {
  doc,
  updateDoc,
  arrayRemove,
  arrayUnion,
  getDoc,
  setDoc,
  collection,
  query,
  where,
  addDoc,
  serverTimestamp,
  getDocs // Added getDocs to the import
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { db, getUsers } from '../../Firebase';
import SidebarItem from './SidebarItems';
import userImage from '../../img/users/Default_User.png';

function Sidebar({ onChatOpen }) {
  const [contacts, setContacts] = useState([]);
  const [showPotentialMatches, setShowPotentialMatches] = useState(false);
  const [potentialMatches, setPotentialMatches] = useState([]);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // New state variable for modal visibility

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const authUser = getAuth().currentUser;
      if (authUser) {
        const authUserId = authUser.uid;
        const authUserDocRef = doc(db, 'users', authUserId);
        const authUserDoc = await getDoc(authUserDocRef);
  
        if (authUserDoc.exists()) {
          let contactIds = authUserDoc.data().contacts || [];
          // Filter out the current user's ID from the contact list
          contactIds = contactIds.filter(id => id !== authUserId);

          const contactDocs = await Promise.all(contactIds.map(id => getDoc(doc(db, 'users', id))));
          const fetchedContacts = contactDocs.map(doc => ({ id: doc.id, ...doc.data()}));
          console.log("Fetched contacts:", fetchedContacts);
          setContacts(fetchedContacts);
        } else {
          console.error("User document doesn't exist:", authUserId);
        }
      } else {
        console.error("User is not authenticated!");
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
}

  const fetchPotentialMatches = async () => {
    try {
     const authUser = getAuth().currentUser;
      if (authUser) {
          console.log("Fetching potential matches...");
          let users = await getUsers();
          users = users.filter(user => user.id !== authUser.uid)

          console.log("Fetched all users:", users); // This should log the list of users
          setPotentialMatches(users);
      }
      else {
          console.error("User is not authenticated!");
      }
    } catch (error) {
      console.error("Error fetching potential matches:", error);
    }
  };

  const removeMatch = async (userId) => {
    const authUser = getAuth().currentUser;
    if (!userId) {
      console.error("Invalid userId:", userId);
      return;
    }
    if (authUser) {
      const authUserId = authUser.uid;
      const authUserDocRef = doc(db, 'users', authUserId);
      
      console.log("Removing match:", userId, authUserId);  // <-- Added this log
  
      await updateDoc(authUserDocRef, {
        contacts: arrayRemove(userId)
      });
  
      const otherUserDocRef = doc(db, 'users', userId);
      await updateDoc(otherUserDocRef, {
        contacts: arrayRemove(authUserId)
      });
      
      fetchContacts();
    }
}

const addUser = async (userId) => {
  try {
      const authUser = getAuth().currentUser;
      if (!authUser) {
          console.error("User is not authenticated");
          return;
      }

      if (!userId) {
          console.error("Invalid userId:", userId);
          return;
      }

      const authUserId = authUser.uid;
      const authUserDocRef = doc(db, 'users', authUserId);
      const otherUserDocRef = doc(db, 'users', userId);

      const authUserDoc = await getDoc(authUserDocRef);
      const otherUserDoc = await getDoc(otherUserDocRef);

      if (!authUserDoc.exists()) {
          console.error("Authenticated user document doesn't exist:", authUserId);
          return;
      }

      if (!otherUserDoc.exists()) {
          console.error("Other user document doesn't exist:", userId);
          return;
      }

      try {
          await updateDoc(authUserDocRef, {
              contacts: arrayUnion(userId)
          });
      } catch (error) {
          console.error("Error updating auth user doc:", error);
      }

      try {
          await updateDoc(otherUserDocRef, {
              contacts: arrayUnion(authUserId)
          });
      } catch (error) {
          console.error("Error updating other user doc:", error);
      }

      console.log("User added successfully:", userId);
      fetchContacts();  // Ensure contacts are re-fetched after adding a user
      setShowPotentialMatches(false);

  } catch (error) {
      console.error("Error adding user:", error);
  }
};

  const toggleShowPotentialMatches = () => {
    console.log("Toggling potential matches...");
    setShowPotentialMatches(!showPotentialMatches);

    if (!showPotentialMatches) {
      fetchPotentialMatches();
    }
  };

  const createChatRoom = async (contactId) => {
    const authUser = getAuth().currentUser;
    if (authUser) {
      const authUserId = authUser.uid;
      const participants = [authUserId, contactId].sort(); // Sort to maintain order
  
      // Query to check if a chat room already exists with these participants
      const q = query(collection(db, 'chatrooms'), where('participants', '==', participants));
      const querySnapshot = await getDocs(q);
  
      let chatRoomId; // Declare chatRoomId here
  
      if (querySnapshot.empty) {
        // Create new chat room if it doesn't exist
        const chatRoomDocRef = await addDoc(collection(db, 'chatrooms'), {
          participants,
          lastMessage: '',
          lastUpdated: serverTimestamp()
        });
        chatRoomId = chatRoomDocRef.id; // Define chatRoomId
      } else {
        // Use the existing chat room
        chatRoomId = querySnapshot.docs[0].id; // Define chatRoomId
      }
  
      // Check if onChatOpen is a function before calling it
      if (typeof onChatOpen === 'function') {
        onChatOpen(chatRoomId); // Use chatRoomId within the function scope
      } else {
        console.error('onChatOpen is not a function');
      }
    }
  };


  // Provide a default prop for onChatOpen
  Sidebar.defaultProps = {
    onChatOpen: () => {} // Default to a no-operation function
  };

  const openModal = () => {
    setIsModalOpen(true);
    fetchPotentialMatches(); // Fetch potential matches when opening the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const selectUserAndCreateChat = async (userId) => {
    await addUser(userId); // Wait for the user to be added to contacts
    createChatRoom(userId); // Then create the chatroom
    closeModal();
  };

  const selectUserAndAddToSidebar = async (userId) => {
    await addUser(userId); // Add the user to contacts
    closeModal(); // Close the modal
  };

  
  return (
    <div className="main-mentors">
      <div className="mentor-header">
        <h4>Your Mentors</h4>
      </div>
      <div className="mentor-list">
      {console.log("Rendering contacts:", contacts)}  {/* Add this log */}
      {console.log("Rendering contacts in JSX:", contacts)}
        {contacts.map(contact => (
          <div className="contact-item" key={contact.id}>
            <img src={userImage} alt="User" className="sidebar-user-image" style={{ backgroundColor: contact.color ?? "#aabbcc"}} />
            <div className="name-box">
              <SidebarItem
                key={contact.id}
                contact={contact}
                removeMatch={removeMatch}
                createChatRoom={createChatRoom}
              /> 
              </div>
        </div>
        ))}
      </div>
      <button onClick={openModal}>
        Add User
      </button>
      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
              <ul>
                {potentialMatches.map(user => (
                  <li key={user.id} onClick={() => selectUserAndAddToSidebar(user.id)}>
                      {user.name}
                  </li>
                ))}
            </ul>
              <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;