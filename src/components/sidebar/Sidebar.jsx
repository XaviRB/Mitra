import React, { useState, useEffect } from 'react';
import { doc, updateDoc, arrayRemove, getDoc, arrayUnion, getDocs, query, collection } from 'firebase/firestore';
import { setDoc } from 'firebase/firestore'; // Add this import separately
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { db, getUsers } from '../../Firebase'; // Adjust the path based on your project structure
import SidebarItem from './SidebarItems';

function Sidebar() {
  const [contacts, setContacts] = useState([]);
  const [showPotentialMatches, setShowPotentialMatches] = useState(false);
  const [potentialMatches, setPotentialMatches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const authUser = getAuth().currentUser;
    if (authUser) {
      const authUserId = authUser.uid; // Get the authenticated user's ID
      const authUserDocRef = doc(db, 'users', authUserId);
      const authUserDoc = await getDoc(authUserDocRef);

      if (authUserDoc.exists()) {
        const contactIds = authUserDoc.data().contacts;
        const contactDocs = await Promise.all(contactIds.map(id => getDoc(doc(db, 'users', id))));
        setContacts(contactDocs.map(doc => ({ id: doc.id, ...doc.data() })));
      }
    }
  }

  const fetchPotentialMatches = async () => {
    const authUser = getAuth().currentUser;
    if (authUser) {
      const authUserId = authUser.uid;
      const authUserDocRef = doc(db, 'users', authUserId);
      const authUserDoc = await getDoc(authUserDocRef);
  
      if (authUserDoc.exists()) {
        const contactIds = authUserDoc.data().contacts;
        const users = await getUsers();
        const potentialMatches = users.filter(user => user.id !== authUserId && !contactIds.includes(user.id));
  
        setPotentialMatches(potentialMatches);
      }
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
  };

  const toggleShowPotentialMatches = () => {
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
      <button onClick={toggleShowPotentialMatches}>
        {showPotentialMatches ? 'Close' : 'Add User'}
      </button>
      {showPotentialMatches && (
        <div className="dropdown-menu">
          {potentialMatches.map(user => (
            <div key={user.id} onClick={() => addUser(user.id)}>
              {user.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sidebar;