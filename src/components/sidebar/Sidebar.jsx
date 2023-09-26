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
    const authUser = getAuth().currentUser;
    if (authUser) {
      const authUserId = authUser.uid;
      const authUserDocRef = doc(db, 'users', authUserId);
      const authUserDoc = await getDoc(authUserDocRef);

      if (authUserDoc.exists()) {
        const contactIds = authUserDoc.data().contacts;
        const contactDocs = await Promise.all(contactIds.map(id => getDoc(doc(db, 'users', id))));
        setContacts(contactDocs.map(doc => ({ id: doc.id, ...doc.data() })));
        console.log("Set contacts:", contacts);
      }
    }
  }

  const fetchPotentialMatches = async () => {
    try {
      console.log("Fetching potential matches...");
      const users = await getUsers();
      console.log("Fetched all users:", users);
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
    try{
      
      const authUser = getAuth().currentUser;
      if (authUser) {
        const authUserId = authUser.uid;
        const authUserDocRef = doc(db, 'users', authUserId);
        const otherUserDocRef = doc(db, 'users', userId);
    
        await updateDoc(authUserDocRef, {
          contacts: arrayUnion(userId)
        });
    
        await updateDoc(otherUserDocRef, {
          contacts: arrayUnion(authUserId)
        });
    
        fetchContacts();
    
        setShowPotentialMatches(false);
      }
      console.log("User added:", userId);
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

  const selectUserAndCreateChat = (userId) => {
    createChatRoom(userId); // Existing function to create a chat room
    closeModal();
  };

  return (
    <div className="main-mentors">
      <div className="mentor-header">
        <h4>Your Mentors</h4>
      </div>
      <div className="mentor-list">
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
                <li key={user.id} onClick={() => selectUserAndCreateChat(user.id)}>
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