import React, { useState, useEffect } from 'react';
import { doc, updateDoc, arrayRemove, getDoc, arrayUnion, getDocs, query, collection } from 'firebase/firestore';
import { setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { db, getUsers } from '../../Firebase';
import SidebarItem from './SidebarItems';

function Sidebar() {
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
          const contactIds = authUserDoc.data().contacts || [];
          const contactDocs = await Promise.all(contactIds.map(id => getDoc(doc(db, 'users', id))));
          const fetchedContacts = contactDocs.map(doc => ({ id: doc.id, ...doc.data() }));
          console.log("Fetched contacts:", fetchedContacts);
          setContacts(fetchedContacts);
        } else {
          console.error("User document doesn't exist:", authUserId);
        }
      } else {
        console.error("User is not authenticated");
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  }

  const fetchPotentialMatches = async () => {
    try {
      console.log("Fetching potential matches...");
      const users = await getUsers();
      console.log("Fetched all users:", users); // This should log the list of users
      setPotentialMatches(users);
    } catch (error) {
      console.error("Error fetching potential matches:", error);
    }
  };

  const removeMatch = async (userId) => {
    const authUser = getAuth().currentUser;
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
      if (authUser) {
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
  
        await updateDoc(authUserDocRef, {
          contacts: arrayUnion(userId)
        });
  
        await updateDoc(otherUserDocRef, {
          contacts: arrayUnion(authUserId)
        });
        
        console.log("User added successfully:", userId);
  
        fetchContacts();  // <-- Ensure contacts are re-fetched after adding a user
  
        setShowPotentialMatches(false);
      }
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
      const chatRoomId = `${authUserId}_${contactId}`;

      const chatRoomDocRef = doc(db, 'chatrooms', chatRoomId);
      const chatRoomDoc = await getDoc(chatRoomDocRef);

      if (!chatRoomDoc.exists()) {
        await setDoc(chatRoomDocRef, {
          users: [authUserId, contactId],
          messages: []
        });
      }

      navigate(`/chat/${chatRoomId}`);
    }
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
        {contacts.map(contact => (
          <SidebarItem
            key={contact.id}
            contact={contact}
            removeMatch={removeMatch}
            createChatRoom={createChatRoom}
          />
        ))}
      </div>
      <button onClick={openModal}>
        Add User
      </button>
      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={closeModal}>Close</button>
              <ul>
                {potentialMatches.map(user => (
                  <li key={user.id} onClick={() => selectUserAndAddToSidebar(user.id)}>
                      {user.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;